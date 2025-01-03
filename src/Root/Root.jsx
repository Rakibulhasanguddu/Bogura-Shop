import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className=" min-h-screen"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;