import { Link } from "react-router-dom";

const MyToyCard = ({ myToy }) => {
  const { _id, name, photoURL, sellerName, price, sellerEmail, quantity } = myToy;

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

            <Link>
              <button className="btn bg-red-500 hover:bg-red-700 border-none">Delete</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToyCard;
