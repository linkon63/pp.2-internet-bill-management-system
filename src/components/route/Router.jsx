import Customers from "../admin/customers/Customers";
import Home from "../admin/home/Home";
import { SignInPage } from "../auth/login/Login";
import { Registrations } from "../auth/registration/Registrations";
import Layout from "../layout/Layout";

export const pageRoutes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Error ocurred in root route</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <Registrations />,
  },
];
