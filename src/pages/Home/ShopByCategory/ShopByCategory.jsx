import { useState } from "react";
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

  console.log(categoryData);

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
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
