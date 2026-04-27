import { createBrowserRouter } from "react-router";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
import Games from "../pages/Games";
import MainLayout from "../layout/MainLayout";
import { gameDeatilsLoader, gamesLoader } from "../service/gamesLoader";
import GamesDetails from "../pages/GamesDetails";


export const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        hydrateFallbackElement:<p>Loading....</p>,
        children:[
            {
        index:true,
        element:<Home/>,
       loader:gamesLoader
      
    },
    {
        path:'favrouite',
        element:<Favourite/>
    },
    {
        path:'games',
        element:<Games/>

    },
    {
        path :'gamesDetails/:id',
        element:<GamesDetails/>,
        loader:gameDeatilsLoader
    }
 
        ]
    }
])