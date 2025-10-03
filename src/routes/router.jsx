import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import PageNotfound from "../pages/PageNotfound";
import AboutMe from "../pages/Aboutme";
import Add_Plant from "../components/Navbar_Component/Add_Plant";
import AllPlants from "../components/Navbar_Component/AllPlants";
import CoffeeDetails from "../components/Navbar_Component/CoffeeDetails";
import MyPlants from "../components/Navbar_Component/MyPlants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },

      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
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
    path: "/about",
    element: <AboutMe></AboutMe>,
  },
  {
    path: "/addplant",
    Component: Add_Plant,
  },
  {
    path: "/allplants",
    loader: () => fetch('http://localhost:3000/plants'),
    Component: AllPlants,
  },

  {
    path: '/plant/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
    Component: CoffeeDetails
  },

  {
    path: "/myplants",
    loader: () => fetch("http://localhost:3000/plants"),
    Component: MyPlants
  },

  // {
  //   path: "/news-details/:id",
  //   element: (
  //     <PrivateRoute>
  //       <NewsDetails></NewsDetails>
  //     </PrivateRoute>
  //   ),
  //   loader: () => fetch("/news.json"),
  //   hydrateFallbackElement: <Loading></Loading>,
  // },
  // {
  //   path: "/*",
  //   element: <PageNotfound></PageNotfound>,
  // },
]);

export default router;
