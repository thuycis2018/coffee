import { useLoaderData } from "react-router-dom";
import { getBlogs } from "../components/getCMSData";
import CardList from "../components/CardList";
import { useQuery } from "@tanstack/react-query";

const featuredBlogsQuery = (featured) => {
  return {
    queryKey: ["featured_blogs", featured || true],
    queryFn: () => getBlogs(true),
  };
};

export const loader =
  (queryClient) =>
  async ({ featured }) => {
    await queryClient.ensureQueryData(featuredBlogsQuery(featured));
    return null;
  };

const Home = () => {
  useLoaderData();
  const { data } = useQuery(featuredBlogsQuery(true));
  return (
    <>
      <CardList items={data} />
    </>
  );
};
export default Home;
