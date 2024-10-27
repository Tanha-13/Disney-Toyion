
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryToy = ({ toy }) => {
  const { _id, photo, toyName, price, rating, category } = toy || {};

  return (
    <div className="p-1">
      <div className="border-gray-200 rounded-lg shadow p-3 ">
        <img
          className="h-36 md:h-52 max-w-full mx-auto"
          src={photo}
          alt={toyName}
        />
        <div className="p-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">{category}</p>
            <p className="flex justify-center items-center bg-gray-100 px-3 py-1 rounded-3xl text-sm">
              <FaStar className="me-2 text-yellow-500"></FaStar> {rating}
            </p>
          </div>
          <div className="text-left">
            <div className="text-2xl mt-2">{toyName}</div>
            <div className="color my-3">{price}</div>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn-block py-2 button-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryToy;

CategoryToy.propTypes = {
  toy: PropTypes.object
}