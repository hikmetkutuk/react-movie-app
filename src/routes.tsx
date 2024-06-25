import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/movies",
        element: <Movie/>,
        errorElement: <Error/>
    },
    {
        path: "/bookmarks",
        element: <Bookmark/>,
        errorElement: <Error/>
    }
]);
