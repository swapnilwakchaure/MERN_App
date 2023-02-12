import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components
import Username from "./components/Username";
import Password from "./components/Username";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";


// root routes
const router = createBrowserRouter([
    {
        path : "/",
        element : <Username>username</Username>
    },
    {
        path : "/register",
        element : <Register>register</Register>
    },
    {
        path : "/password",
        element : <Password>password</Password>
    },
    {
        path : "/profile",
        element : <Profile>profile</Profile>
    },
    {
        path : "/recovery",
        element : <Recovery>recovery</Recovery>
    },
    {
        path : "/reset",
        element : <Reset>reset</Reset>
    },
    {
        path : "/pagenotfound",
        element : <PageNotFound>page not found</PageNotFound>
    }
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}>
            </RouterProvider>
        </main>
    )
}