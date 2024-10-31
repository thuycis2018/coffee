import { useLoaderData } from "react-router-dom";
import { searchBlogs } from "../components/getCMSData";
//import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const loader = async ({ params }) => {
  const { id } = params;
  const items = searchBlogs(id);
  return items;
};

// const options = {
//   renderNode: {
//     [BLOCKS.OL_LIST]: (_node, children) => {
//       const items = children.map((child, id) => {
//         return <li key={id}>child</li>;
//       });

//       return <ul className='mylist'>{items}</ul>;
//     },
//   },
// };

const BlogPage = () => {
  const { items } = useLoaderData();
  if (items && items[0]) {
    const { title, text, imgUrl } = items[0];
    return (
      <div className='text-white'>
        <h1 className='capitalize text-3xl tracking-wide font-medium text-center pt-20'>
          {title}
        </h1>
        <div className='grid lg:grid-cols-3 pt-10'>
          <div className='col-span-1'>
            <img src={imgUrl} alt={title} className='w-full h-auto lg:p-2' />
          </div>
          <div className='col-span-2 leading-8 lg:p-5'>
            {documentToReactComponents(text)}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Invalid URL</div>;
  }
};
export default BlogPage;
