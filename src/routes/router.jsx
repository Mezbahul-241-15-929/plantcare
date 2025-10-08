import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Loading from "../pages/Loading";
import PageNotfound from "../pages/PageNotfound";
import Add_Plant from "../components/Navbar_Component/Add_Plant";
import AllPlants from "../components/Navbar_Component/AllPlants";
import CoffeeDetails from "../components/Navbar_Component/CoffeeDetails";
import MyPlants from "../components/Navbar_Component/MyPlants";
import UpdatePlanet from "../components/Navbar_Component/UpdatePlanet";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://plantcare-server-lc9w.vercel.app/plants"),
    hydrateFallbackElement: <Loading></Loading>,
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: "",
        element: <Home></Home>,
      },

    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  
  {
    path: "/addplant",
    Component: Add_Plant,
  },
  {
    path: "/updateplant/:id",
    loader: ({ params }) => fetch(`https://plantcare-server-lc9w.vercel.app/plants/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
    Component: UpdatePlanet,
  },
  {
    path: "/allplants",
    loader: () => fetch('https://plantcare-server-lc9w.vercel.app/plants'),
    hydrateFallbackElement: <Loading></Loading>,
    Component: AllPlants,
  },

  {
    path: '/plant/:id',
    loader: ({ params }) => fetch(`https://plantcare-server-lc9w.vercel.app/plants/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
    Component: CoffeeDetails
  },

  {
    path: "/myplants",
    loader: () => fetch("https://plantcare-server-lc9w.vercel.app/plants"),
    hydrateFallbackElement: <Loading></Loading>,
    Component: MyPlants
  },
    {
    path: "/*",
    element: <PageNotfound></PageNotfound>,
  },

]);

export default router;
