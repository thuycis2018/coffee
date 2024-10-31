/* eslint-disable react/prop-types */
const Blog = ({ slug, imgUrl, title }) => {
  slug = `/blogs/${slug}`;
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={imgUrl}
        alt={title}
        className='w-full object-cover rounded-t-lg h-auto scale-75 hover:scale-90 duration-300'
      />
      <div className='lg:p-8'>
        <h2 className='capitalize text-xl tracking-wide font-medium text-center'>
          <a href={slug} title={title}>
            {title}
          </a>
        </h2>
      </div>
    </article>
  );
};
export default Blog;
