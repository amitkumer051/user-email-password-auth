import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import RootCompo from './components/RootCompo/RootCompo.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import Register from './components/Register/Register.jsx';
import HeroRegister from './components/HeroRegister/HeroRegister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootCompo></RootCompo>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/heroRegister',
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
