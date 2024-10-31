import { createClient } from "contentful";

const CONTENT_TYPE = "coffee";
const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const getBlogs = async (featured) => {
  let filter = { content_type: CONTENT_TYPE };
  if (featured) {
    filter = { ...filter, "fields.featured": true };
  }
  const response = await client.getEntries(filter);
  const items = response.items.map((item) => {
    return parseData(response, item);
  });

  return { items };
};

export const searchBlogs = async (slug) => {
  const response = await client.getEntries({
    content_type: CONTENT_TYPE,
    "fields.slug[in]": slug,
  });
  const items = response.items.map((item) => {
    return parseData(response, item);
  });

  return { items };
};

export const getBlog = async (id) => {
  const response = await client.getEntry(id);
  if (response.fields) {
    return response.fields;
  }

  return { error: true };
};

const parseData = (response, item) => {
  const { title, text, slug, featured } = item.fields;
  const id = item.sys.id;
  const assetId = item.fields.image?.sys?.id;
  const img = response.includes?.Asset?.find(
    (asset) => asset.sys.id === assetId
  );
  let imgUrl = img.fields?.file?.url;
  imgUrl = imgUrl ? "https:" + imgUrl : "";
  return { id, title, text, imgUrl, slug, featured };
};
