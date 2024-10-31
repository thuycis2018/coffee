import { useFetchCMS } from "../hooks/fetchCMS";
import Card from "./Card";

const CardList = () => {
  const { loading, items } = useFetchCMS(true);

  if (loading) {
    return (
      <section className='blogs'>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className='py-20 align-element relative' id='cards'>
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {items.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default CardList;
