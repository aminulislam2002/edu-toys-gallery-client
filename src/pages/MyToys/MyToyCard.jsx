import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyCard = ({ myToy }) => {
  const { _id, name, photoURL, sellerName, price, sellerEmail, quantity } = myToy;

  const handleDeleteToy = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="py-5 flex justify-center items-center">
      <div className="card hover:shadow-2xl w-full bg-base-200 shadow-xl">
        <figure className="bg-red-500">
          <img src={photoURL} className="w-full h-52" alt="image" />
        </figure>

        <h2 className="card-title p-3">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="flex flex-col gap-5 p-3">
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Price</span>
                </td>
                <td>: $ {price}</td>
              </tr>
              <tr>
                <td>
                  <span>Available</span>
                </td>
                <td>: {quantity} pcs</td>
              </tr>
              <tr>
                <td>
                  <span>Seller Name</span>
                </td>
                <td>: {sellerName}</td>
              </tr>
              <tr>
                <td>
                  <span>Seller Email</span>
                </td>
                <td>: {sellerEmail}</td>
              </tr>
            </tbody>
          </table>

          <div className="card-actions justify-end">
            <button className="btn bg-yellow-500 hover:bg-yellow-700 border-none ">
              <Link to={`/updateToy/${_id}`}>Update</Link>
            </button>
            <button onClick={() => handleDeleteToy(_id)} className="btn bg-red-500 hover:bg-red-700 border-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
