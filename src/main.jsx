import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root.jsx';
import ErrorPage from './ErrorPage.jsx';
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "addCoffee",
      element: <AddCoffee></AddCoffee>
    },
    {
      path: "updateCoffee",
      element: <UpdateCoffee></UpdateCoffee>
    }
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
