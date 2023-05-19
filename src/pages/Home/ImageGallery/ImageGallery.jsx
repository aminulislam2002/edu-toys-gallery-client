import { useState } from "react";
import image1 from "../../../assets/sign-in.png";
import image2 from "../../../assets/sign-up.png";
import image3 from "../../../assets/sign-in.png";
import image4 from "../../../assets/sign-up.png";
import image5 from "../../../assets/sign-in.png";
import image6 from "../../../assets/sign-up.png";
import image7 from "../../../assets/sign-in.png";
import image8 from "../../../assets/sign-up.png";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(image1);

  const images = [`${image1}`, `${image2}`, `${image3}`, `${image4}`, `${image5}`, `${image6}`, `${image7}`, `${image8}`];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div><h1>Top 10 Product Image</h1></div>
      <div className="flex gap-5">
        <div className="w-1/2 h-96 grid grid-cols-4 gap-5 bg-stone-400">
          {images.map((image, index) => (
            <img
              className="w-40 h-40 mx-auto my-auto bg-gray-200"
              key={index}
              src={image}
              alt="image"
              onClick={() => handleClick(image)}
            />
          ))}
        </div>
        <div className="w-1/2 h-96 flex justify-center items-center bg-red-400">
          {selectedImage && <img className="w-50 h-50" src={selectedImage} alt="image" />}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
