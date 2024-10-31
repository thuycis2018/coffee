import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className='min-h-screen bg-amber-800 bg-cover bg-center'>
      <Navbar />
      <Hero />
      <Waves />
      <section className='max-w-full lg:w-1/2 mx-auto bg-transparent w-5/6'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
      <Footer />
    </div>
  );
};
export default HomeLayout;
