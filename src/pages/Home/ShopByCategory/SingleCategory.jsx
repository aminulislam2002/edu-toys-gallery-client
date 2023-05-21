const SingleCategory = () => {
  return (
    <div>
      {/* <div>


            import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const handleCategoryData = async (categoryName) => {
    try {
      const res = await fetch(`https://ph-assignment-number-eleven-server.vercel.app/categoryToys?category=${categoryName}`);
      const data = await res.json();
      setCategoryData(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching category data:", error);
    }
  };

  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <Tabs>
        <TabList className="flex justify-around bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 text-white py-3">
          <Tab>
            <button onClick={() => handleCategoryData("Science Kits")}>Science Kits</button>
          </Tab>
          <Tab>
            <button onClick={() => handleCategoryData("Engineering Kits")}>Engineering Kits</button>
          </Tab>
          <Tab>
            <button onClick={() => handleCategoryData("Math Learning Toys")}>Math Learning Toys</button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            {categoryData &&
              categoryData.map((category) => (
                <div key={category._id} className="w-full">
                  <div className="py-5 flex justify-center">
                    <div className="card shadow-lg rounded-lg overflow-hidden">
                      <figure>
                        <img src={category.image} className="w-full h-40 object-cover" alt="image" />
                      </figure>

                      <div className="p-4">
                        <h2 className="text-xl font-semibold">{category.name}</h2>

                        <table className="mt-4">
                          <tbody>
                            <tr>
                              <td className="font-medium">Price:</td>
                              <td>$ {category.price}</td>
                            </tr>
                            <tr>
                              <td className="font-medium">Available:</td>
                              <td>{category.quantity} pcs</td>
                            </tr>
                            <tr>
                              <td className="font-medium">Product Code:</td>
                              <td>{category.code}</td>
                            </tr>
                            <tr>
                              <td className="font-medium">Seller Email:</td>
                              <td>{category.sellerEmail}</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="text-yellow-600">
                          <Rating
                            placeholderRating={category?.ratings?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className="bg-yellow-600 text-2xl"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
                        <div className="flex justify-center items-center mt-6">
                          <button className="btn border-none mr-2 bg-orange-500 hover:bg-orange-700">Add To Cart</button>
                          <button className="btn border-none bg-red-500 hover:bg-red-700">
                            <Link to={`/singleToyDetails/${category._id}`}>View Details</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory; */}

      {/* </div> */}
    </div>
  );
};

export default SingleCategory;
