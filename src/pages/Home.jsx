import { useLoaderData } from "react-router-dom";
import { getBlogs } from "../components/getCMSData";
import CardList from "../components/CardList";

export const loader = async () => {
  const items = getBlogs(true);
  return items;
};
const Home = () => {
  const { items } = useLoaderData();
  return (
    <>
      <CardList items={items} />
    </>
  );
};
export default Home;
