import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import Title from "../Shared/Title/Title";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitleChange from "../../hooks/useTitleChange";

const UpdateToy = () => {
  useTitleChange('| Update Toy');
  const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    const navigate = useNavigate();
  const {
    _id,
    toyName,
    photo,
    price,
    quantity,
    category,
    rating,
    description,
  } = toy || {};

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const category = form.toyCategory.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updateToy = {
      toyName,
      photo,
      price,
      quantity,
      category,
      rating,
      description,
    };
    Swal.fire({
      title: "Do you want to Update?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't Update`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://disney-toyion-server.vercel.app/updateToy/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateToy),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated',
                    showConfirmButton: false,
                    timer: 1000
                  })
                    navigate('/myToys');
              }
              form.reset();
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Not updated", "", "error");
      }
    });
  };
  return (
    <div>
      <div>
        <Title>Update Toy</Title>
        <div className="p-1 md:p-0">
          <p className="paragraph">
            To update toy details, simply fill out our user-friendly form with
            the new information like toy name, category, price, and other
            relevant details.{" "}
          </p>
          <div>
            <div className="container-box shadow-md lg:m-10 xl:m-14">
              <form className="p-2 md:p-14" onSubmit={handleUpdate}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="toyName"
                      id="toyName"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      defaultValue={toyName}
                      required
                    />
                    <label
                      htmlFor="toyName"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10  peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Toy Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      defaultValue={photo}
                      required
                    />
                    <label
                      htmlFor="photo"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Photo URL
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      defaultValue={user?.displayName}
                      type="text"
                      name="sellerName"
                      id="sellerName"
                      className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="sellerName"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Seller Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      defaultValue={user?.email}
                      name="sellerEmail"
                      id="sellerEmail"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="sellerEmail"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Seller Email
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      defaultValue={price}
                      required
                    />
                    <label
                      htmlFor="price"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Price
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      defaultValue={quantity}
                      required
                    />
                    <label
                      htmlFor="quantity"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Available Quantity
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="categoryToy"
                    className="block mb-2 text-md font-medium text-gray-500"
                  >
                    Select Sub-category
                  </label>
                  <select
                    id="categoryToy"
                    name="toyCategory"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md block w-full p-2.5 "
                    defaultValue={category}
                  >
                    <option value="princess">Disney Princess</option>
                    <option value="prince">Disney Prince</option>
                    <option value="mickey">Mickey</option>
                    <option value="frozen">Frozen Movie</option>
                    <option value="villain">Disney Villain</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="rating"
                      id="rating"
                      className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                      placeholder=" "
                      defaultValue={rating}
                      required
                    />
                    <label
                      htmlFor="rating"
                      className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Rating
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="description"
                        id="description"
                        className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                        placeholder=" "
                        defaultValue={description}
                        required
                      />
                      <label
                        htmlFor="description"
                        className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Description
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full button-primary py-3 font-bold"
                >
                  Update
                </button>
              </form>
              <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
