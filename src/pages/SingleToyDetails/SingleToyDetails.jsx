import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const singleToy = useLoaderData();
  const { _id, name, category, title, photoURL, sellerName, price, sellerEmail, quantity, description, ratings } = singleToy;
  console.log(singleToy);
  
  return (
    <div>
      <h1>Single Toy Details {singleToy.name}</h1>
    </div>
  );
};

export default SingleToyDetails;
