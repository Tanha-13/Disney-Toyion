import { useContext } from "react";
import Title from "../Shared/Title/Title";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useTitleChange from "../../hooks/useTitleChange";

const AddToys = () => {
  useTitleChange('| Add Your Toy');

  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const photo = form.photo.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const category = form.toyCategory.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const addToy = {
      toyName,
      photo,
      sellerName,
      sellerEmail,
      price,
      quantity,
      category,
      rating,
      description,
    };
    fetch("https://disney-toyion-server.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Toy details has been added", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <Title>Add a Toy</Title>
      <div className="p-1 md:p-0">
        <h1 className="title ">Add Your Toy</h1>
        <p className="paragraph">
          Fill out the form below to add a new toy to your collection.{" "}
        </p>
        <div>
          <div className="container-box shadow-md lg:m-10 xl:m-14">
            <form className="p-2 md:p-14" onSubmit={handleAddToy}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="toyName"
                    id="toyName"
                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-[#e17f3e] peer"
                    placeholder=" "
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
                Submit
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
  );
};

export default AddToys;
