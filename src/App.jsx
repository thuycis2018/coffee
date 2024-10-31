import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import Waves from "./components/Waves";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Waves />
      <CardList />
      <Footer />
    </main>
  );
};
export default App;
