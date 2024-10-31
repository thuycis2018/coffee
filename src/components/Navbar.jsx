import { nanoid } from "nanoid";
const Navbar = () => {
  const links = [
    { id: nanoid(), href: "/", text: "home" },
    { id: nanoid(), href: "/blogs", text: "blogs" },
  ];
  return (
    <nav className='bg-primary'>
      <div className='mx-auto max-w-7xl  px-8 py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <div className='flex gap-x-3 font-semibold pt-5 lg:pt-0 md:pt-0 text-white'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
