import { useFetchCMS } from "../hooks/fetchCMS";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const BlogList = () => {
  const { loading, items } = useFetchCMS();

  if (loading) {
    return (
      <section className='blogs'>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className='blogs'>
      <div className='title'>
        <h2>Blogs</h2>
        <div className='title-underline'></div>
      </div>
      <div className='blogs-center'>
        {items.map((item) => {
          const { id, imgUrl, title, slug, text } = item;
          return (
            <a key={id} href={slug} className='blogs'>
              <img src={imgUrl} alt={title} className='img' />
              <h5>{title}</h5>
              <p>{documentToReactComponents(text)}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default BlogList;
