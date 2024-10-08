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
import ViewDetails from './ViewDetails.jsx';
import AuthProvider from './AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:9001/coffees')
    },
    {
      path: "addCoffee",
      element: <AddCoffee></AddCoffee>
    },
    {
      path: "updateCoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({ params }) => fetch(`http://localhost:9001/updateCoffee/${params.id}`)
    },
    {
      path: "viewDetails/:id",
      element: <ViewDetails></ViewDetails>,
      loader: ({ params }) => fetch(`http://localhost:9001/updateCoffee/${params.id}`)
    }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
