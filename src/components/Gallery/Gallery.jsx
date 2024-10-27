import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';



const Gallery = () => {
  useEffect(()=>{
    AOS.init();
  },[]);

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, []);

  return (
    <div className='p-1 lg:p-14'>
      <div className='container-box m-14'>
        <h2 className='title'>Gallery</h2>
        <p className='paragraph'>Welcome to our enchanting Disney toy gallery, where dreams come to life and childhood memories are made. Step into a world of wonder as you immerse yourself in a mesmerizing collection of Disney toys that will ignite your imagination and fill your heart with joy.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div data-aos="zoom-in"
              key={index}
              className='relative bg-contain bg-center h-64 transition duration-300 ease-in-out transform hover:scale-105 bg-no-repeat rounded-lg shadow-lg'
              style={{
                backgroundImage: `url(${image.src})`,

              }}
            >
              {/* bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
              <div className="absolute inset-0 color opacity-0 transition-opacity duration-500  hover:opacity-90 bg-gray-200 h-full w-full flex justify-center items-center rounded-lg">
                <h3 className="text-3xl font-bold">{image.title}</h3>
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;