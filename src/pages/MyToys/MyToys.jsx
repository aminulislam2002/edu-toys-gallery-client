import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDeleteToy = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mx-10 py-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Code</th>
              <th>Quantity</th>
              <th>
                <div className="card-actions justify-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.category}</td>
                <td>$ {toy.price}</td>
                <td>$ {toy.code}</td>
                <td>{toy.quantity}</td>
                <td>
                  <div className="card-actions justify-center">
                    <button className="btn bg-yellow-500 hover:bg-yellow-700 border-none ">
                      <Link to={`/updateToy/${toy._id}`}>Update</Link>
                    </button>
                    <button onClick={() => handleDeleteToy(toy._id)} className="btn bg-red-500 hover:bg-red-700 border-none">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
