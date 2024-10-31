/* eslint-disable react/prop-types */
import Blog from "./Blog";

const BlogList = ({ items }) => {
  if (!items) {
    return (
      <section className='blogs'>
        <h2>No Data</h2>
      </section>
    );
  }
  return (
    <>
      <div className='text-6xl capitalize leading-relaxed text-center text-primary pt-5'>
        <h2 className='text-white'>Blogs</h2>
      </div>
      <section className='lg:align-element relative'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-8'>
          {items.map((item) => {
            return <Blog key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
};
export default BlogList;
