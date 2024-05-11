import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Rental from './pages/Rental.jsx';
import Forms from './pages/Forms.jsx';
import CarSelect from './components/CarSelect.jsx';
import { Toaster } from 'react-hot-toast';
import ThankYou from './pages/ThankYou.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
         path: '/',
        //index: true,
        element: <Home/>,
      },
      {
        path: '/rental',
        element: <Rental/>,
      },
      {
        path: '/forms/:id',
        element: <Forms/>
      },
      {
        path: '/thankYou/:data',
        element: <ThankYou/>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
