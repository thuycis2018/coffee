const Footer = () => {
  return (
    <footer className='p-4 text-white text-center md:mt-10 border-t'>
      &copy; <span id='date'>{new Date().getFullYear()}</span> Thuy Le
    </footer>
  );
};
export default Footer;
