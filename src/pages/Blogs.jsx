import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { getBlogs } from "../components/getCMSData";
import BlogList from "../components/BlogList";
import { useQuery } from "@tanstack/react-query";

const blogsQuery = (featured) => {
  return {
    queryKey: ["blogs", featured || false],
    queryFn: () => getBlogs(false),
  };
};

export const loader =
  (queryClient) =>
  async ({ featured }) => {
    await queryClient.ensureQueryData(blogsQuery(featured));
    return null;
  };

const Blogs = () => {
  useLoaderData();
  const { data } = useQuery(blogsQuery(false));

  if (data) {
    return (
      <>
        <Outlet />
        <BlogList items={data} />
      </>
    );
  } else {
    return <Navigate to='/' />;
  }
};
export default Blogs;
