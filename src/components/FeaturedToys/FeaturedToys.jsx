import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FadeLoader from "react-spinners/FadeLoader";
import FeaturedToy from "./FeaturedToy";

const FeaturedToys = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const [featuredToys, setFeaturedToys] = useState([]);
  console.log(featuredToys.length);
  useEffect(() => {
    setLoading(true);
    fetch("https://disney-toyion-server.vercel.app/featuredToys")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedToys(data);
        setLoading(false);
      });
  }, [setLoading]);
  return (
    <div>
      <h2 className="title">Featured Toy</h2>
      <p className="paragraph">
        Explore the hottest and most sought-after toys in our handpicked
        Featured Toy collection
      </p>
      <div>
        {loading ? (
          <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#B64A02" height={18} width={5} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 container-box m-10 gap-5">
            {featuredToys.map((featuredToy) => (
              <FeaturedToy
                key={featuredToy}
                featuredToy={featuredToy}
              ></FeaturedToy>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedToys;
