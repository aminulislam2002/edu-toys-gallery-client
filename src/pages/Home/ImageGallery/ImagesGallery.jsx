import { useEffect, useState } from "react";

const ImagesGallery = () => {
  const [toys, setToys] = useState([]);
  const [showMoreToy, setShowMoreToy] = useState(6);
  const [showAllData, setShowAllData] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleShowMoreToy = () => {
    if (showAllData) {
      setShowMoreToy(6);
      setShowAllData(false);
    } else {
      setShowMoreToy(toys.length);
      setShowAllData(true);
    }
  };

  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2">
        {toys.slice(0, showMoreToy).map((toy) => (
          <div key={toy._id}>
            <div className="p-3">
              <img className="w-44 h-28 mx-auto" src={toy.image} alt="" />
              <h1>{toy.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleShowMoreToy}
          className="btn bg-green-500 hover:bg-green-600 border-none text-white font-bold py-2 px-4 rounded"
        >
          {showAllData ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default ImagesGallery;
