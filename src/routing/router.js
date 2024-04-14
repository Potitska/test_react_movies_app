import {createBrowserRouter, Navigate} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import {MainLayout} from "../layouts";
import {MovieDetailsPage, MoviesPage, NotFoundPage} from "../pages";
import {Favorite} from "../components";

const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'movies'}/>
            },
            {
                path:AppRoutes.MOVIES,
                element:<MoviesPage/>
            },
            {
                path:AppRoutes.MOVIE_BY_ID,
                element:<MovieDetailsPage/>
            },
            {
                path:AppRoutes.FAVORITE,
                element:<Favorite/>
            },
            {
                path:'*',
                element:<NotFoundPage/>
            }
        ]
    }
])

export {
    router
}