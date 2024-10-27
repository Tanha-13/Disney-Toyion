import { useContext, useRef, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff, HiXCircle } from "react-icons/hi";
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const { loginWIthEmailPassword, forgetPassword, googleProviderUser} = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const handleLogInWithEmailPassword = event => {
    setError('');
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //firebase login
    loginWIthEmailPassword(email, password)
      .then(result => {
        console.log(result)
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'user logged in successfully',
          showConfirmButton: false,
          timer: 1000
        });
        form.reset();
        navigate(from, {replace: true});
      })
      .catch(error => {

        setError(error.message);
        // setLoading(false);
      })

  }

  const handleForgetPassword = () => {
    setError('');
    const email = emailRef.current.value;
    if (!email) {
      setError('Provide your valid email');
      return;
    }
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'email has been sent. Please check to update your password',
        }),
          setError('');
      })
      .catch(error => {
        setError(error.message);
        // setLoading(false);
      })

  }
  const handleGoogleUser = () => {
    setError('');
    googleProviderUser()
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        setError('');
        navigate(from, {replace: true});
      })
      .catch(error => {
        setError(error.message);
      })
  }
  return (
    <div className='container-box mt-10'>
      <div className="hero max-h-screen">
        <div className=" flex md:justify-between shadow-xl flex-col md:flex-row-reverse">
          <div className="text-center w-1/2 bg-gray-100 rounded-r-lg hidden md:block">
            <h1 className=" text-4xl lg:text-5xl font-bold mt-10 mb-2">Welcome Back</h1>
            <p className="text-lg">Nice to see you again!</p>
            <img className='lg:w-4/5 mx-auto ' src="https://i.postimg.cc/wBRhLv7C/Mobile-login-pana.png" alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm  mx-auto bg-base-100">
            <div className="card-body">
              <h1 className='text-4xl font-bold md:text-center'>Login<span className='md:hidden'>!</span></h1>
              <p className='text-center text-sm'>Please enter your details to login</p>

              {/* error for log in */}
              <label className="label p-0">
                <small className=''>{error && <div className='btn btn-block hover:bg-red-300 hover:border-red-300 bg-red-300 border-red-300 text-red-900 lowercase font-bold'><HiXCircle></HiXCircle>{error}</div>}</small>
              </label>

              <form onSubmit={handleLogInWithEmailPassword}>

                {/* email field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                </div>

                {/* password field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className='flex items-center'>
                    <input type={showPassword ? 'text' : "password"} name='password' placeholder={"password"} className="input input-bordered flex-1" required />
                    <span className='-ms-5 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                      {
                        showPassword ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>
                      }
                    </span>
                  </div>
                  <label className="label">
                    <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                  </label>
                </div>
                {/* submit button */}
                <div className="form-control mt-2 md:mt-6">
                  <input className='button-primary py-2 cursor-pointer' type="submit" value="Login" />
                </div>
              </form>
              <div className="divider">or</div>
              {/* login using google */}
              <button onClick={handleGoogleUser} className='button-secondary py-2 flex justify-center items-center'>
                <FcGoogle className='me-3 w-5 h-5'></FcGoogle>
                Login with Google
              </button>
              <p className='text-bold text-center my-2'><small>New to Disney Toyion? </small><Link to='/register' className='color'>Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;