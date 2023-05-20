import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const handleCategoryData = async (categoryName) => {
    try {
      const res = await fetch(`http://localhost:5000/categoryToys?category=${categoryName}`);
      const data = await res.json();
      setCategoryData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  return (
    <div className="mx-20 my-10">
      <Tabs>
        <TabList className="flex justify-around bg-red-300 py-3">
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
          <div className="grid grid-cols-4 gap-5">
            {categoryData &&
              categoryData.map((category) => (
                <div key={category._id}>
                  <div className="py-5 flex justify-center items-center">
                    <div className="card hover:shadow-2xl w-full bg-base-200 shadow-xl">
                      <figure className="bg-red-500">
                        <img src={category.image} className="w-full h-52" alt="image" />
                      </figure>

                      <h2 className="card-title p-3">{category.name}</h2>

                      <div className="flex flex-col gap-5 p-3">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span>Price</span>
                              </td>
                              <td>: $ {category.price}</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Available</span>
                              </td>
                              <td>: {category.quantity} pcs</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Seller Name</span>
                              </td>
                              <td>: {category.sellerName}</td>
                            </tr>
                            <tr>
                              <td>
                                <span>Seller Email</span>
                              </td>
                              <td>: {category.sellerEmail}</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="flex justify-center items-center gap-4">
                          <button className="btn w-1/2 border-none bg-orange-500 hover:bg-orange-700">Add To Cart</button>
                          <button className="btn w-1/2 border-none bg-red-500 hover:bg-red-700">
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

export default ShopByCategory;
