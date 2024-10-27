import { useContext, useEffect, useState } from "react";
import Title from "../Shared/Title/Title";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import { FaAngleDown } from "react-icons/fa";
import useTitleChange from "../../hooks/useTitleChange";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";

const MyToys = () => {
  useTitleChange("| My Toys");
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);
  const [sortToys, setSortToys] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://disney-toyion-server.vercel.app/myToys?email=${user?.email}&sortToy=${sortToys}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setIsLoading(false);
      });
  }, [user, sortToys]);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://disney-toyion-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingToys = myToys.filter((toy) => toy._id !== id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  const handleSort = (sort) => {
    setSortToys(sort);
  };

  return (
    <div className="p-1 md:p-0">
      <>
        <Title>My Toys</Title>
      </>
      <div className="container-box">
        <div className="dropdown dropdown-bottom dropdown-end mb-28 flex justify-end">
          <label tabIndex={0} className="m-1 btn btn-outline capitalize">
            sorted by<FaAngleDown className="ms-1"></FaAngleDown>
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => handleSort("ascending")}>Ascending</button>
            </li>
            <li>
              <button onClick={() => handleSort("descending")}>
                Descending
              </button>
            </li>
          </ul>
        </div>
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#B64A02" height={18} width={5} />
          </div>
        ) : myToys.length > 0 ? (
          <div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr className="text-center">
                    <th></th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myToys.map((myToy, index) => (
                    <MyToy
                      key={myToy._id}
                      myToy={myToy}
                      index={index}
                      handleDeleteToy={handleDeleteToy}
                    ></MyToy>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h2 className="text-center md:text-xl lg:text-2xl md:m-10 font-bold">
            Your My Toys section is currently empty. <br className="hidden md:block" /> Start adding toys to
            see them appear here! Go to{" "}
            <Link to="/add" className="color underline">
              {" "}
              Add a Toy
            </Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default MyToys;
