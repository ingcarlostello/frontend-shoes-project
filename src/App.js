// @Components
import HeroSection from "./components/HeroSection/HeroSection";
import MenSection from "./components/Men/MenSection";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import WomenSection from "./components/Women/WomenSection";





function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WomenSection />
      <MenSection />
      <ProductDetail />
    </>
  );
}

export default App;
