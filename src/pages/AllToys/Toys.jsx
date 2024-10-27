import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Toys = ({ toy }) => {
  const { _id,toyName, category, price, quantity, sellerName, sellerEmail } = toy;
  return (
    <tr className="text-center">
      <td>{toyName}</td>
      <td>{category}</td>
      <td>TK. {price}</td>
      <td>{quantity}</td>
      <td>
        <div>
          <h3>{sellerName}</h3>
          <p className="text-sm text-gray-500">{sellerEmail}</p>
        </div>
      </td>
      <th>
        <Link to={`/details/${_id}`}><button className="button-primary px-5 py-3">View Details</button></Link>
      </th>
    </tr>
  );
};

export default Toys;

Toys.propTypes = {
  toy: PropTypes.object
}