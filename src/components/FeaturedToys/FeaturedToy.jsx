import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const FeaturedToy = ({ featuredToy }) => {
  console.log(featuredToy);
  const { _id ,photo, toyName, category, rating,description,price } = featuredToy;
  return (
    <div className="">
      <div className=" card lg:card-side bg-base-100 shadow-xl p-1">
        <figure>
          <img src={photo} alt="Album" className="h-80 w-full object-contain" />
        </figure>
        <div className="w-2/3 ms-10">
          <h2 className="card-title">{toyName}</h2>
          <div className="flex items-center divide-x-2 divide-gray-400 my-4">
            <p className="text-gray-500 me-10">{category}</p>
            <p className="flex items-center px-3 py-1 text-sm">
              <FaStar className="ms-4 me-2 text-yellow-500"></FaStar> {rating}
                      </p>
                      
                  </div>
                  <h3 className="font-semibold text-2xl color my-5">TK. {price}</h3>
                  {
                      description.length < 100 ? <p>{description}</p> : <>{ description.slice(0,100)}...<Link className="color" to={`/details/${_id}`}>read more</Link></>
                  }
        </div>
      </div>
    </div>
  );
};

export default FeaturedToy;

FeaturedToy.propTypes = {
    featuredToy: PropTypes.object
}
