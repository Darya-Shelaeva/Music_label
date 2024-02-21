import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage/';
import './App.scss'





const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
   
  ]);
  

  root.render(
       <RouterProvider router={routes} />
  );