import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import "./main.css";

import Footer from '../footer/footer';
import Home from '../home/home';
import Navigation from '../navigation/navigation';
import ButtonSandbox from '../../components/button/Sandbox';
import ButtonGroup from '../../components/button-group/Sandbox';
import Icon from '../../components/icon/Sandbox';
import Image from '../../components/image/Sandbox';

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
      {
        path: '/button/',
        exact: true,
        element: <ButtonSandbox />,
      },
      {
        path: '/button-group/',
        exact: true,
        element: <ButtonGroup />,
      },
      {
        path: '/icon/',
        exact: true,
        element: <Icon />,
      },
      {
        path: '/image/',
        exact: true,
        element: <Image />,
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
