import { createBrowserRouter } from "react-router-dom";
import Layot from "../pages/Layot";
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Buy from "../pages/Buy";
import Recipte from "../pages/Recipte";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import AdminPage from "../pages/AdminPage";
import Order from "../components/admin/Order";
import ProductAdmin from "../components/admin/ProductAdmin";
import FeedbackItem from "../components/admin/FeedbackItem";

export const router= createBrowserRouter([
    {
        path:"/" ,
        element: <Layot/>,
        children: [
            {
                path:"/" ,
                element: <Home/>,
            },
            {
                path:"/product" ,
                element: <Product/>,
            },
            {
                path:"/about" ,
                element: <About/>
            },
            {
                path:"/buy" ,
                element: <Buy/>
            },
            {
                path:"/recipte" ,
                element: <Recipte/>
            },
            {
                path:"/auth" ,
                element: <Auth/>
            },
            {
                path:"/profile" ,
                element: <Profile/>
            },
            {
                path:"/admin" ,
                element: <AdminPage/>,
                children: [
                    {
                        path:"/admin/order" ,
                        element: <Order/>
                    },
                    {
                        path:"/admin/product" ,
                        element: <ProductAdmin/>
                    },
                    {
                        path:"/admin/feedback" ,
                        element: <FeedbackItem/>
                    },
                ]
            }
            
        ]
    }
])
