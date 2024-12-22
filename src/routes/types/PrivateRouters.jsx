import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/main_page/MainPage";
import Layout from "../../Layout/Layout";
import Login from "../../pages/login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <Login/>,
            },
            {
                path:'/login',
                element: <Login/>,
            },
            {
                path:'main',
                element: <MainPage/>,
            }
        ]
    }
]);