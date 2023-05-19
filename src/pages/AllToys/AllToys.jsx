import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="mx-10 py-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.category}</td>
                <td>$ {toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <button type="submit" className="btn">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
