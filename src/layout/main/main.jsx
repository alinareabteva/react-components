import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Footer from '../footer/footer';
import Home from '../home/home';
import Navigation from '../navigation/navigation';
import "./main.css";


const Main = () => (
  <div className="main">
    <Navigation />
    <div className="content-wrapper">
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        exact: true,
        element: <Home />,
      },
     
    ]
  },
]);


const MainComponent = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default MainComponent;
