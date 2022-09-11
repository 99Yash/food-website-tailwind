import Category from "./components/Category";
import Food from "./components/Food";
import HeadlineCardsList from "./components/HeadlineCardsList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCardsList />
      <Food />
      <Category />
    </div>
  );
}

export default App;
