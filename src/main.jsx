import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Pages/Main/Main';
import Home from './Home/Home';
import Menu from './Pages/Menu/Menu/Menu';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
      path: "/",
  element: <Main></Main>,
  children:[
    {
      path:"/",
      element:<Home></Home>

    },
    {
      path:"/menu",
      element:<Menu></Menu>
    }
  ]
},
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='container mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
