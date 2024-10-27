import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <div className="hero max-h-screen bg-[#f88e31] mb-16">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d35400" fillOpacity="0.5" d="M0,224L40,197.3C80,171,160,117,240,117.3C320,117,400,171,480,170.7C560,171,640,117,720,101.3C800,85,880,107,960,138.7C1040,171,1120,213,1200,213.3C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className='text-3xl md:text-5xl font-extrabold'>{children}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
Title.propTypes = {
  children: PropTypes.object
}