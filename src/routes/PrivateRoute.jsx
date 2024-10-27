import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Grid
          height="80"
          width="80"
          color="#B64A02"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  const handleLoginRedirect = () => {
    return navigate("/login", { state: { from: location } });
  };
  return (
    <div className="w-full">
      <div
        data-aos="zoom-in"
        className="lg:w-4/6 w-full mx-auto md:p-20 p-4 aos-init aos-animate"
      >
        <div className="md:p-11 p-2 flex justify-center alert flex-col bg-white md:bg-gray-100 ">
          <div className="card md:w-96 text-center">
            <h1 className="text-3xl font-bold color">Please Login</h1>
            <p className="paragraph">
              to add a toy into your collection or view
              <br />
              details of a toy, please login/register
            </p>
            <div>
              <button
                className="button-primary btn btn-wide border-none"
                onClick={handleLoginRedirect}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
