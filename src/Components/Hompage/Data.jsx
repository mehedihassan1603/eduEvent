import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Data = ({ data }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  

  const { title, description, imageUrl, price, buttonText } = data;
  return (
    <div className="border bg-red-200 rounded-lg p-4 shadow-md mb-4 mt-4" data-aos="slide-right">
      <div className="flex">
        <div className="w-1/3 pr-4">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
        <div className="w-2/3">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
          {price && (
            <p className="text-green-600 font-semibold mt-2">Price: {price}</p>
          )}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 hover:bg-blue-700 transition duration-300 ease-in-out">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
