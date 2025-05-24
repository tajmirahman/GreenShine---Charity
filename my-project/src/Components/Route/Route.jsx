import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Error";
import Home from "../Home";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]

    },
    {
        path:'/about',
        element:<h2>This is about page</h2>
    },
    {
        path:'/event',
        element:<h2>This is event page</h2>
    },
    {
        path:'/blog/submenu1',
        element:<h2>This is about page</h2>
    }
]);

export default routes;