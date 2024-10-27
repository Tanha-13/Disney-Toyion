import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-28 relative bottom-0">
      <footer className="footer p-20 bg-base-200">
        <div>
          <Link to="/">
            <img className="w-28 md:w-36" src={logo} alt="Disney Toyion" />
          </Link>
          <p className="text-lg leading-none">Disney Toyion</p>
          <p className="leading-none">
            Step into the enchanting world of Disney
          </p>
        </div>
        <div>
          <span className="footer-title opacity-100 color">Useful Links</span>
          <Link to="/all" className="link link-hover">
            All Toys
          </Link>
          <Link to="/add" className="link link-hover">
            Add a Toy
          </Link>
          {user && (
            <Link to="/myToys" className="link link-hover">
              My Toys
            </Link>
          )}
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </div>
        <div>
          <span className="footer-title opacity-100 color">Contact</span>
          <p>
            Office Address: 123 Main Street, City, Country <br />
            <br /> Available Time: Monday to Friday: 9:00 AM - 5:00 PM
            <br /> <br />
            Mobile Number: +1 123-456-7890
          </p>
        </div>
        <div>
          <span className="footer-title opacity-100 color">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2024 - All right reserved by Disney Toyion</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
