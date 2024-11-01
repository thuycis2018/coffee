/* eslint-disable react/prop-types */
import Card from "./Card";
import { Navigate } from "react-router-dom";

const CardList = ({ items }) => {
  if (!items) {
    return <Navigate to='/' />;
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
