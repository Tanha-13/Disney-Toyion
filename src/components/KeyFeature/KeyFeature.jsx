
import { FaClipboardCheck, FaUserCog, FaUserFriends, FaWarehouse } from "react-icons/fa";

const KeyFeature = () => {
  return (
    <div className="container-box m-10 p-1 md:p-10">
      <div className="grid mb-8 border md:border-none border-gray-200 rounded-lg shadow-sm md:mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col p-8 text-center bg-white border-b lg:border-b-0 border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
          <div className="">
            <div className="flex justify-center">
              <FaWarehouse className="w-12 h-12 color"></FaWarehouse>
            </div>
            <h3 className="text-lg  mt-3 font-semibold text-gray-900">
              Extensive Toy Collection
            </h3>
            <p className="my-4">
              Discover our vast and diverse collection of toys.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg
        lg:border-b-0  md:border-r"
        >
          <div className="">
            <div className="flex justify-center">
              <FaUserFriends className="w-12 h-12 color"></FaUserFriends>
            </div>
            <h3 className="text-lg  mt-3 font-semibold text-gray-900">
              User Friendly Navigation
            </h3>
            <p className="my-4">
              Enjoy our user-friendly navigation system for better
              browsing experience
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r ">
        <div className="">
            <div className="flex justify-center">
              <FaClipboardCheck className="w-12 h-12 color"></FaClipboardCheck>
            </div>
            <h3 className="text-lg  mt-3 font-semibold text-gray-900">
            Toy Reviews and Ratings
            </h3>
            <p className="my-4">
            Check out our Toy Reviews and Ratings before making decision.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg ">
        <div className="">
            <div className="flex justify-center">
              <FaUserCog className="w-12 h-12 color"></FaUserCog>
            </div>
            <h3 className="text-lg  mt-3 font-semibold text-gray-900">
            Easy Toy Management
            </h3>
            <p className="my-4">
              Manage toy collection without hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
