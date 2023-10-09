import { useLoaderData } from "react-router-dom";
import Data from "./Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer/Footer";
import About from "./About Us/About";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  // const imageUrls = [
  //   "https://i.ibb.co/NSb76w4/1.jpg",
  //   "https://i.ibb.co/tb8g92X/3.png",
  //   "https://i.ibb.co/BcMYbSm/2.jpg",
  // ];
  return (
    <div className="">
      {/* <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              style={{ maxWidth: "100%", maxHeight: "500px" }}
            />
          </div>
        ))}
      </Carousel> */}
      <Banner></Banner>
      <div>
        <div>
          <h1 className="text-4xl text-center bannertext text-white font-bold mt-8">
            Unlock a World of Knowledge with EduEvent!
          </h1>
          <p className="text-white text-center text-lg mt-6 mb-10">
            🌟 Explore our diverse range of educational events, workshops, and
            courses. <br />
            📚 Dive into a world of knowledge curated by experts in
            their fields. <br /> 
            🌐 Connect with like-minded individuals and expand
            your network. <br /> 
            🚀 Take your learning journey to the next level with
            EduEvent!
          </p>
          <h1 className="text-4xl text-center bannertext text-white font-bold mt-8">
            Services are available
          </h1>
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
