import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  
  const { title, description, imageUrl, price, id } = data;
  const shortDescription = description.slice(0, 150);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  

  
  return (
    <div className="border bg-slate-200 rounded-lg p-4 shadow-md mb-4 mt-4 mx-10" data-aos="slide-up">
      <div className="flex">
        <div className="w-1/3 pr-4">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
        <div className="w-2/3">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          {price && (
            <p className="text-green-600 font-semibold mt-2">Price: {price}</p>
          )}
            <p className="text-gray-600 text-lg">{shortDescription}...</p>
          
          <Link to={`/details/${id}`}><button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 hover:bg-blue-700 transition duration-300 ease-in-out">
            Show Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Data;
