import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componeten/Root/Root';
import Home from './Componeten/Home/Home';
import Login from './Componeten/Login/Login';
import Register from './Componeten/Register/Register';
import HeroRegister from './Componeten/HeroRegister/HeroRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/HeroRegister',
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
