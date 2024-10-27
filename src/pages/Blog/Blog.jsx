import Title from "../Shared/Title/Title";
import useTitleChange from "../../hooks/useTitleChange";

const Blog = () => {
  useTitleChange("| Blog");

  return (
    <>
      <Title>Blog</Title>
      <div className="lg:grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 ">
        <div className="container-box p-1 md:p-2 lg: flex justify-center">
          <div className="card bg-base-100 lg:w-96 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src="https://i.postimg.cc/MKGYDJwj/princess.png"
                alt="Shoes"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                The Ultimate Guide to Disney Princess Toys
              </h2>
              <p>
                {" "}
                Discover the enchanting world of Disney Princess toys! From
                Cinderella to Moana, there’s something for every little prince
                or princess to bring their favorite stories to life.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Princess</div>
                <div className="badge badge-outline">Toys</div>
                <button className="btn-block py-2 button-primary mt-6">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-box p-1 md:p-0 flex justify-center">
          <div className="card bg-base-100 lg:w-96 shadow-xl ">
            <figure className="px-5 pt-5">
              <img
                src="https://i.postimg.cc/Gh4wBN4b/disney.jpg"
                alt="Shoes"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Disney Toy Collections for the Ultimate Fan
              </h2>
              <p>
                {" "}
                Discover the enchanting world of Disney Princess toys! From
                Cinderella to Moana, there’s something for every little prince
                or princess to bring their favorite stories to life.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Disney</div>
                <div className="badge badge-outline">Toys</div>
                <button className="btn-block py-2 button-primary mt-6">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-box p-1 md:p-0 flex justify-center">
          <div className="card bg-base-100 lg:w-96 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src="https://i.postimg.cc/MKGYDJwj/princess.png"
                alt="Shoes"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                The Ultimate Guide to Disney Princess Toys
              </h2>
              <p>
                {" "}
                Discover the enchanting world of Disney Princess toys! From
                Cinderella to Moana, there’s something for every little prince
                or princess to bring their favorite stories to life.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Princess</div>
                <div className="badge badge-outline">Toys</div>
                <button className="btn-block py-2 button-primary mt-6">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
