import { useContext, useEffect, useState } from "react";
import Toys from "./Toys";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange.js";
import { AuthContext } from "../../providers/AuthProvider";
import FadeLoader from "react-spinners/FadeLoader";
import Title from "../Shared/Title/Title";

const AllToys = () => {
  useTitleChange("| All Toys");
  const { totalToys } = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);

  // state
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(20);

  const totalPages = Math.ceil(totalToys / toysPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://disney-toyion-server.vercel.app/allToys?page=${currentPage}&limit=${toysPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [currentPage, toysPerPage,setLoading]);

  const handleSearchInput = (event) => {
    const text = event.target.value;
    setSearch(text);
  };
  const handleSearchToyName = () => {
    fetch(`https://disney-toyion-server.vercel.app/searchToys/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const options = [5, 10, 20, 30, 40];
  const handleSelectChange = (event) => {
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  // search data will show without pagination
  const renderPagination = () => {
    if (search !== "") {
      return null;
    }
    return (
      <div className="text-center my-10">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={
              currentPage === pageNumber
                ? "btn border-none bg-[#B64A02]"
                : "btn btn-outline border-none"
            }
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <select
          className="select max-w-xs ms-2"
          value={toysPerPage}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="">
      <>
        <Title>All Toys</Title>
      </>
      <div className="container-box p-1 md:p-0 ">
        <p className="paragraph">
          Experience the wonder of Disney with our captivating Disney Toys
          collection. From cuddly companions to action-packed figures, our toys
          let you bring your favorite characters, like Mickey Mouse and Elsa,
          into your own home. Immerse yourself in the magic and let the Disney
          adventures begin!
        </p>
        <div className="form-control mt-8 mb-10">
          <div className="input-group flex justify-center">
            <input
              onChange={handleSearchInput}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              value={search}
            />{" "}
            <button onClick={handleSearchToyName} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {loading ? (
          <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#B64A02" height={18} width={5} />
          </div>
        ) : toys.length > 0 ? (
          <div>
            <div>
              <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th>Toy Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Available Quantity</th>
                      <th>Seller Name</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toys.map((toy) => (
                      <Toys key={toy._id} toy={toy}></Toys>
                    ))}
                  </tbody>
                </table>
              </div>
                <div>{ renderPagination()}</div>
            </div>
          </div>
        ) : (
          <h3 className="text-center text-5xl m-10 p-10 font-bold">
            No Data Found
          </h3>
        )}
      </div>
    </div>
  );
};

export default AllToys;
