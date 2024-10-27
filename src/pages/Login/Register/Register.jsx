import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff, HiXCircle } from "react-icons/hi";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUserWithEmailPassword, googleProviderUser, setLoading, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const [error, setError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterUsingEmail = event => {
    setError('');
    setRegisterError('');
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    //password validation
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setError('Please add one special character');
      return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add one upper-case');
      return;
    }
    else if (!/(?=.[0-9])/.test(password)) {
      setError('Please add one number');
      return;
    }
    else if (password.length < 6) {
      setError('password must have at least 6 characters');
      return;
    }

    //firebase register
    createUserWithEmailPassword(email, password)
      .then(result => {
        const createdUser = result.user;

        setError('');
        setRegisterError('');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User has been created successfully',
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
        navigate(from, { replace: true });
        updateUserData(createdUser, name, photo)


          .then(() => { })
          .catch((error) => {
            setRegisterError(error.message);
            setLoading(false);
          })
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error.message);
        setLoading(false);
      })
  }

  const handleGoogleUser = () => {
    googleProviderUser()
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        setError('');
        setRegisterError('');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User has been created successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        setRegisterError(error.message);
        setLoading(false);
      })
  }
  return (
    <div className='container-box mt-8'>
      <div className="hero max-h-screen">
        <div className="flex md:justify-between shadow-xl flex-col md:flex-row">
          <div className="text-center w-1/2 bg-gray-50 rounded-l-lg hidden lg:block">
            <img className='w-28 mt-5 ms-4 ' src="https://i.postimg.cc/CxdSjwt0/logo.png" alt="" />
            <div className=''>
              <img className='lg:mt-10' src="https://i.postimg.cc/g0Czz1gW/Secure-login-pana-1.png" alt="" />
            </div>
          </div>
          <div className="card lg:w-1/2 max-w-sm  mx-auto bg-base-100">
            <div className="card-body">
              <h1 className='text-3xl font-bold'>Create your account<span className='md:hidden'>!</span></h1>
              <p className='text-sm'>{`We'd love to have you!`}</p>
              {/* error for register */}
              <label className="label p-0">
                <small >{registerError && <div className='btn btn-block hover:bg-red-300 hover:border-red-300 bg-red-300 border-red-300 text-red-900 lowercase font-bold'><HiXCircle></HiXCircle>{registerError}</div>}</small>
              </label>
              <form onSubmit={handleRegisterUsingEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
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
                  <label className="label p-0">
                    <small className=''>{error ? <span className='text-red-800 font-bold'>{error}</span> : <span className='text-xs font-semibold text-green-800'>**password must contain 6 characters, including one special character,one upper case and number</span>}</small>
                  </label>
                </div>
                <div className="form-control mt-2 md:mt-6">
                  <input className='button-primary py-2 cursor-pointer' type="submit" value="Create account" />
                </div>
              </form>
              <div className="divider my-0">or</div>
              <button onClick={handleGoogleUser} className='button-secondary py-2 flex justify-center items-center'>
                <FcGoogle className='me-3 w-5 h-5'></FcGoogle>
                Google
              </button>
              <p className='text-bold text-center my-2'><small>Already have an account? </small><Link to='/login' className='color'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;