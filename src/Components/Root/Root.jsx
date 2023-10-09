import { Outlet } from "react-router-dom";
import Navbar from "../Hompage/Navbar";

const Root = () => {
    return (
        <div className="bg-sky-900">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;