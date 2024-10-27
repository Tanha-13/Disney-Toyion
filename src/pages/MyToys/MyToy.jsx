import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToy = ({ myToy, index, handleDeleteToy,handleUpdateToy }) => {
  const { user } = useContext(AuthContext);

  const { _id, photo, category, toyName, price, quantity } = myToy || {};

  
  return (
      <tr className='text-center'>
      <td>{index+1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td>{category}</td>
        <td>Tk. {price}</td>
        <td>{quantity}</td>
        
        <td><Link to={`/updateToy/${_id}`}><button className='btn'>Update</button></Link></td>
        <td><button onClick={()=> handleDeleteToy(_id)} className='btn btn-outline'>Delete</button></td>
      </tr>
  );
};

export default MyToy;