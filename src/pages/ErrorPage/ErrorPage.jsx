import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status, statusText } = useRouteError();
    const navigate = useNavigate();

    
  return (
    <div className="container-box p-10 ">
      <div className=" flex items-center">
        <div className="shadow-xl p-10 text-gray-800 md:flex items-center text-center md:text-left bg-gray-100">
          <div className="w-full md:w-1/2">
            <div className="mb-10 md:mb-20 text-gray-600 font-bold">
              <h1 className="text-3xl lg:text-9xl color">{status}</h1>
              <p className="mb-10 font-light text-sm leading-none">
                {statusText}
              </p>
              <p>{error.message}</p>
              <p>Try searching again or use below buttons.</p>
            </div>
            <div className="mb-20 md:mb-0 space-x-6">
              <Link to='/'>
                <button className="text-lg button-primary  px-7 py-2">
                  Home
                </button>
              </Link>
              <button onClick={() => navigate(-1)} className="text-lg button-secondary  px-7 py-2">
                Back
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img
              src="https://i.ibb.co/JBDpG55/404-Error-amico.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
