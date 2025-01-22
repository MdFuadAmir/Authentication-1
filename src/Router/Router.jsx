import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Order from "../component/Order/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/order",
                element: <PrivateRoute> <Order/> </PrivateRoute> 
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
        ]    
    }
])
export default router;