import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-gray-100 p-2 md:p-14'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-7'>
        <div className='ms-5 col-span-2'>
          <h1 className='text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-extrabold py-3 xl:py-14 leading-normal'>Step into the enchanting world of Disney at <span className='text-3xl xl:text-6xl color '>Disney Toyion</span></h1>
          <div className='flex items-center justify-center lg:justify-start'>
            <img className='w-16 xl:w-36 me-10 md:me-8' src="https://i.postimg.cc/wvTpvqq6/banner1.png" />
            <button className='px-7 py-2 lg:px-8 lg:py-3 xl:px-16 xl:py-4 button-primary me-2 font-bold '><Link to='/all'>All Toys</Link></button>
          </div>
        </div>

        <div className='flex justify-center items-center col-span-3'>
          <img  src="https://i.postimg.cc/FKwmdy7D/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;