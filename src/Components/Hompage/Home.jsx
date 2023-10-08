import { useLoaderData } from "react-router-dom";
import Data from "./Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer/Footer";
import About from "./About Us/About";
import Contact from "../Contact/Contact";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  const imageUrls = [
    "https://i.ibb.co/NSb76w4/1.jpg",
    "https://i.ibb.co/tb8g92X/3.png",
    "https://i.ibb.co/BcMYbSm/2.jpg",
  ];
  return (
    <div className="">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              style={{ maxWidth: "100%", maxHeight: "500px" }}
            />
          </div>
        ))}
      </Carousel>
      <div>
        <div>
          <h1 className="text-4xl text-center font-bold mt-8">Our Services</h1>
        </div>
        {data.map((data) => (
          <Data data={data}></Data>
        ))}
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
