import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[80%] mx-auto max-w-[1200px] mt-6'>
            <Outlet></Outlet>
            {/* <Modal></Modal> */}
            </div>
        </div>
    );
};

export default MainLayout;