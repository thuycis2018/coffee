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
      <div className='loading' />
      <section>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
      <Footer />
    </div>
  );
};
export default HomeLayout;
