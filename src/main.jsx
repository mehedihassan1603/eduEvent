import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Hompage/Home";
import Events from "./Components/Hompage/Events";

import Root from "./Components/Root/Root";

import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/Routess/PrivateRoute";
import Notice from "./Components/Notice/Notice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/notice",
        element: (
          <PrivateRoute>
            <Notice></Notice>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login>,</Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
