import Banner from "../../components/Banner/Banner";
import FeaturedToys from "../../components/FeaturedToys/FeaturedToys";
import Gallery from "../../components/Gallery/Gallery";
import KeyFeature from "../../components/KeyFeature/KeyFeature";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

function Home() {
  return (
    <>
      <Banner></Banner>
      <KeyFeature></KeyFeature>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
      <FeaturedToys></FeaturedToys>
    </>
  );
}

export default Home;
