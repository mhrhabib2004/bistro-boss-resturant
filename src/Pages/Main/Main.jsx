import { Outlet } from "react-router-dom";
import Footer from "../Sherd/Footer";
import Navbar from "../Sherd/NavBar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;