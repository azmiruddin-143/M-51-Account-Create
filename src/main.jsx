import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root Component/Root';
import Hero from './Components/Home Page/Hero';
import Blog from './Components/Blog page/Blog';
import Shop from './Components/Shop page/Shop';
import Order from './Components/Order page/Order';
import Create from './Components/Create Account/Create';
import Login from './Components/Login page/Login';
import Authform from './Authform setup/Authform';
import Privet from './Components/Privet componet/Privet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-5xl text-red-700'>404 Error Page</h1>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/create",
        element: <Create></Create>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/shop",
        element: <Privet><Shop></Shop></Privet>
      },
      {
        path: "/order",
        element: <Privet><Order></Order></Privet>
      },
      {
        path: "/contact",
        element: <h1 className='text-3xl'>Contact Page</h1>
      }
    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <Authform>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Authform>
)
