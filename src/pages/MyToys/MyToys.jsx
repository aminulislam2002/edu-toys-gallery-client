import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyCard from "./MyToyCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/myToys?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [url]);

  return (
    <div className="mx-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {myToys.map((myToy) => (
          <MyToyCard key={myToy._id} myToy={myToy} myToys={myToys} setMyToys={setMyToys}></MyToyCard>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
