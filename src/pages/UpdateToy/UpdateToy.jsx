import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, name, category, title, photoURL, sellerName, price, sellerEmail, quantity, description, ratings } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const title = form.title.value;
    const photoURL = form.photoURL.value;
    const sellerName = form.sellerName.value;
    const price = form.price.value;
    const sellerEmail = form.sellerEmail.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const updatedToy = { name, category, title, photoURL, sellerName, price, sellerEmail, quantity, description, ratings };
    console.log(updatedToy);

    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update a toy successfully!",
            icon: "Success",
            confirmButtonText: "Okay!",
          });
        }
      });
  };

  return (
    <div className="py-10 mx-20">
      <form onSubmit={handleUpdateToy}>
        <div className="flex">
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Enter Toy Name"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text ms-20">Select Category</span>
            </label>
            <div className="input-group">
              <select name="category" className="select select-bordered w-3/4 mx-auto" defaultValue="default">
                <option disabled value="default">
                  {category}
                </option>
                <option>Science Kits</option>
                <option>Math Learning Toys</option>
                <option>Engineering Kits</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Toy Title</span>
            </label>
            <label className="input-group">
              <input
                name="title"
                type="text"
                defaultValue={title}
                placeholder="Enter toy title"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Toy Image URL</span>
            </label>
            <label className="input-group">
              <input
                name="photoURL"
                type="url"
                defaultValue={photoURL}
                placeholder="Enter Toy Image URL"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                name="sellerName"
                type="text"
                defaultValue={sellerName}
                placeholder="Enter Seller Name"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="number"
                defaultValue={price}
                placeholder="Enter Toy Price"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                name="sellerEmail"
                type="email"
                defaultValue={sellerEmail}
                placeholder="Enter Seller Email"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="number"
                defaultValue={quantity}
                placeholder="Enter Available Quantity"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Description</span>
            </label>
            <label className="input-group">
              <input
                name="description"
                type="text"
                defaultValue={description}
                placeholder="Enter Description"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text ms-20">Ratings</span>
            </label>
            <label className="input-group">
              <input
                name="ratings"
                type="number"
                defaultValue={ratings}
                placeholder="Enter Toy Ratings"
                className="input input-bordered w-3/4 mx-auto"
                required
              />
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-1/2 mx-auto">
            <label className="input-group input-group-vertical">
              <input
                type="submit"
                className="btn btn-xs sm:btn-sm md:btn-md bg-blue-500 hover:bg-blue-700 border-none my-10 w-full mx-auto"
                value="Update"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
