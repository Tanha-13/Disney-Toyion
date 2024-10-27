import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CategoryToy from "./CategoryToy";
import FadeLoader from "react-spinners/FadeLoader";

const ShopByCategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [tab, setTab] = useState("princess");
  const [categoryBasedToys, setCategoryBasedToys] = useState([]);

  // fetch data using tab
  useEffect(() => {
    setLoading(true);
    fetch(`https://disney-toyion-server.vercel.app/shopByCategory/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryBasedToys(data);
        setLoading(false);
      });
  }, [tab,setLoading]);
  

  const handleShopByCategory = (tabCategory) => {
    setTab(tabCategory);
  };
  return (
    <div className="container-box">
      <div>
        <h1 className="title">Shop By Category</h1>
        <p className="paragraph">
          Discover a world of Disney magic in our toy shop. Shop by category and
          find the perfect Disney toys for your little ones. Choose from
          Princess, Villain, and Prince categories to bring the enchantment of
          Disney into your home.
        </p>
      </div>

      <div className="text-sm md:text-base font-medium text-center">
        <ul className="flex flex-wrap md:flex-nowrap justify-around">
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => handleShopByCategory("princess")}
              className={`p-3 w-full border flex justify-center items-center cursor-pointer font-medium ${
                tab == "princess" ? "bg-[#B64A02] text-white" : ""
              }`}
            >
              Disney Princess Toys
            </button>
          </li>
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => handleShopByCategory("prince")}
              className={`p-3 w-full border flex justify-center items-center cursor-pointer font-medium ${
                tab == "prince" ? "bg-[#B64A02] text-white" : ""
              }`}
            >
              Disney Prince Toys
            </button>
          </li>
          <li className="w-full flex justify-center items-center">
            <button
              onClick={() => handleShopByCategory("villain")}
              className={`p-3 w-full border flex justify-center items-center cursor-pointer font-medium ${
                tab == "villain" ? "bg-[#B64A02] text-white" : ""
              }`}
            >
              Disney Villain Toys
            </button>
          </li>
        </ul>
        {loading ? (
          <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#B64A02" height={18} width={5} />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {categoryBasedToys.map((toy) => (
              <CategoryToy key={toy._id} toy={toy}></CategoryToy>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
