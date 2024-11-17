import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Home from "../components/Home/Home";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";
import MainLayout from "../Layouts/MainLayout";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-treatments',
                element: <AllTreatments></AllTreatments>
            },
            {
                path: '/my-appointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]
    }
])
export default router;