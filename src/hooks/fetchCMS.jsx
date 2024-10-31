import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchCMS = (featured) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      let filter = { content_type: "coffee" };
      if (featured) {
        filter = { ...filter, "fields.featured": true };
      }
      const response = await client.getEntries(filter);

      const items = response.items.map((item) => {
        const { title, text, slug, featured } = item.fields;
        const id = item.sys.id;
        const assetId = item.fields.image?.sys?.id;
        const img = response.includes?.Asset?.find(
          (asset) => asset.sys.id === assetId
        );
        let imgUrl = img.fields?.file?.url;
        imgUrl = imgUrl ? "https:" + imgUrl : "";
        return { id, title, text, imgUrl, slug, featured };
      });

      setItems(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, items };
};
