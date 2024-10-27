
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { HiMenu } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
  const { user, setLoading, logOut } = useContext(AuthContext);
  // if (loading) {
  //   return <div className='h-screen flex justify-center items-center'>
  //     <Grid
  //       height="80"
  //       width="80"
  //       color="#B64A02"
  //       ariaLabel="grid-loading"
  //       radius="12.5"
  //       wrapperStyle={{}}
  //       wrapperClass=""
  //       visible={true}
  //     />
  //   </div>
  // }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
      })
      .catch(error => {

      })
  }

  return (
    <div className='shadow-md shadow-slate-100'>
      <div className='container-box'>
        <div className="navbar">
          <div className="navbar-start md:justify-start">
            <div className="dropdown">
              <label tabIndex={0} className="cursor-pointer md:hidden">
                <HiMenu className='w-8 h-8'></HiMenu>
              </label>
              <ul tabIndex={0} className="dropdown-content my-3 p-4 shadow bg-base-100 w-72">
                <li><NavLink to='/' className={({ isActive }) =>
                  isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li className='my-2'><NavLink to='/all' className={({ isActive }) =>
                  isActive ? "active" : ""}>All Toys</NavLink>
                </li>
                <li><NavLink to='/add' className={({ isActive }) =>
                  isActive ? "active" : ""}>Add A Toy</NavLink>
                </li>
                {user &&
                  <li><NavLink to='/myToys' className={({ isActive }) =>
                    isActive ? "active" : ""}>My Toys</NavLink>
                  </li>}
                <li><NavLink to='/blog' className={({ isActive }) =>
                  isActive ? "active" : ""}>Blog</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <Link to='/'>
                  <img className='w-28 md:w-36' src={logo} alt="Disney Toyion" />
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="md:flex space-x-5 lg:me-14">
              <li><NavLink to='/' className={({ isActive }) =>
                isActive ? "active" : ""}>Home</NavLink>
              </li>
              <li><NavLink to='/all' className={({ isActive }) =>
                isActive ? "active" : ""}>All Toys</NavLink>
              </li>
              <li><NavLink to='/add' className={({ isActive }) =>
                isActive ? "active" : ""}>Add A Toy</NavLink>
              </li>
              {
                user && <>

                  <li><NavLink to='/myToys' className={({ isActive }) =>
                    isActive ? "active" : ""}>My Toys</NavLink>
                  </li>
                </>
              }
              <li><NavLink to='/blog' className={({ isActive }) =>
                isActive ? "active" : ""}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className='navbar-end lg:hidden'>
            {
              user ?
                <div className=''>
                  <div className='dropdown dropdown-end'>
                    <div className="tooltip tooltip-left " data-tip={user.displayName}>
                      <label tabIndex={0} className="cursor-pointer border-4 border-gray-200 bg-gray-200 btn-circle avatar me-2 ">
                        <div className="w-14 rounded-full ">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                    </div>
                    <ul tabIndex={0} className='dropdown-content my-3 p-4 shadow bg-base-100 w-72'>
                      <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                  </div>
                </div>
                : <button className='button-primary px-5 py-2 font-bold'><Link to='/login'>Log in</Link></button>
            }
          </div>
          <div className="navbar-end hidden lg:flex">
            {
              user ?
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                  <label className="cursor-pointer border-4 border-gray-200 bg-gray-200 btn-circle avatar me-2 ">
                    <div className="w-14 rounded-full ">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                </div>
                : <button className='lg:px-8 lg:py-3 xl:px-10 xl:py-4 button-secondary hover:button-primary me-2 font-bold'><Link to='/login'>Login</Link></button>
            }
            {
              user ?
                <button onClick={handleLogOut} className='button-primary lg:px-4 lg:py-2 xl:px-6 xl:py-3 font-bold'>Logout</button>
                : <button className='button-primary lg:px-8 lg:py-3 xl:px-10 xl:py-4 font-bold'><Link to='/register'>Register</Link></button>

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;