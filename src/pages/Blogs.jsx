import { Outlet, useLoaderData } from "react-router-dom";
import { getBlogs } from "../components/getCMSData";
import BlogList from "../components/BlogList";

export const loader = async () => {
  const items = getBlogs(false);
  return items;
};
const Blogs = () => {
  const { items } = useLoaderData();
  return (
    <>
      <Outlet />
      <BlogList items={items} />
    </>
  );
};
export default Blogs;
