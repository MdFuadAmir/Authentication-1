import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;