import { useLoaderData } from "react-router-dom";
import ImagesGallery from "../ImageGallery/ImagesGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <ImagesGallery></ImagesGallery>
      <ShopByCategory data={data}></ShopByCategory>
    </div>
  );
};

export default Home;
