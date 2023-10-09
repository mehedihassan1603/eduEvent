import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6 mb-10 py-6">
      <div className="text-center">
        <Link
          to="/"
          className="text-white text-6xl font-bold tracking-wider fonty"
        >
          EduEvent
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="Facebook"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/0qd1h8T/Twitter-X-Icon.png"
            alt=""
            style={{ width: "90px", height: "80px" }}
          />
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/170/870/original/instagram-icon-logo-symbol-free-png.png"
            alt=""
            className="rounded-full"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      </div>
      <div className="container mx-auto text-center py-6">
        <p>&copy; 2023 EduEvent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
