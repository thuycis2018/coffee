import { Navigate, useLoaderData } from "react-router-dom";
import { searchBlogs } from "../components/getCMSData";
//import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useQuery } from "@tanstack/react-query";

const blogQuery = (id) => {
  return {
    queryKey: ["blog", id],
    queryFn: () => searchBlogs(id),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(blogQuery(id));
    return { id };
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
  const { id } = useLoaderData();
  const { data } = useQuery(blogQuery(id));
  if (data) {
    const { title, text, imgUrl } = data;
    return (
      <div className='text-white lg:w-1/2 md:w-3/4 w-5/6 mx-auto'>
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
    return <Navigate to='/' />;
  }
};
export default BlogPage;
