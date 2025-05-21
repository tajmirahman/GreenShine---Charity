import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Error";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error />,

    }
]);

export default routes;