import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Error";
import Home from "../Home";
import Gallary from "../Gallary";
import GalleryData from "../GalleryData";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:  () => fetch('../charity-data.json'),

                children: [
                    {
                        path: '/',
                        element: <Gallary></Gallary>,
                        loader: () => fetch('../galleryCategory.json'),
                        children: [
                            {
                                path: '/',
                                element: <GalleryData></GalleryData>,
                                loader: () => fetch('../gallery.json')
                            },
                            {
                                path: '/category/:category',
                                element: <GalleryData></GalleryData>,
                                loader: () => fetch('../gallery.json')
                            }
                        ]
                    },

                ]

            }
        ]

    },
    {
        path: '/about',
        element: <h2>This is about page</h2>
    },
    {
        path: '/event',
        element: <h2>This is event page</h2>
    },
    {
        path: '/blog/submenu1',
        element: <h2>This is about page</h2>
    }
]);

export default routes;