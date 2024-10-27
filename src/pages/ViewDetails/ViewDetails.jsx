import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import { FaStar } from "react-icons/fa";

const ViewDetails = () => {
  useTitleChange("| View Details");
  const toy = useLoaderData();

  const {
    toyName,
    photo,
    sellerName,
    sellerEmail,
    price,
    quantity,
    rating,
    description,
    category,
  } = toy;
  return (
    <div>
      <div className="container-box p-1 md:p-0">
        <div className="hero min-h-fit my-10 p-4 rounded-lg shadow-lg ">
          <div className="flex flex-col xl:flex-row ">
            <div>
              <img
                src={photo}
                className="w-full h-full rounded-lg shadow-2xl p-28"
              />
            </div>
            <div className="w-2/3 ms-10">
              <h2 className="card-title text-center md:text-start md:text-4xl">
                Toy Name: {toyName}
              </h2>
              <hr className="w-16 h-1 my-3 border-2 border-[#B64A02]" />
              <div className="flex items-center divide-x-2 divide-gray-400 my-4">
                <p className="text-gray-500 me-10">{category}</p>
                <p className="flex items-center px-3 py-1 text-sm">
                  <FaStar className="ms-4 me-2 text-yellow-500"></FaStar>{" "}
                  {rating}
                </p>
              </div>
              <h3 className="font-semibold text-2xl color">TK. {price}</h3>
              <p className="my-3">
                {" "}
                <span className="font-bold color">Description: </span>{" "}
                {description}
              </p>
              <h3 className="font-semibold text-2xl"></h3>
              <div className="flex justify-between my-10">
                <p className="my-3">
                  {" "}
                  <span className="font-bold color">Seller Email: </span>{" "}
                  {sellerEmail}
                </p>
                <p className="my-3">
                  {" "}
                  <span className="font-bold color">Seller Name: </span>{" "}
                  {sellerName}
                </p>
              </div>

              <p className="inline-block w-1/3 my-5 border-y-2 py-2 border-dashed border-gray-300">
                {" "}
                <span className="font-bold color">
                  Available Quantity:{" "}
                </span>{" "}
                {quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
//
