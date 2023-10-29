import Customers from "../admin/customers/Customers";
import Home from "../admin/home/Home";
import { SignInPage } from "../auth/login/Login";
import { Registrations } from "../auth/registration/Registrations";
import ClientComplains from "../client/complains/ClientComplains";
import ClientHome from "../client/home/ClientHome";
import ClientPayment from "../client/payments/ClientPayment";
import Layout from "../layout/Layout";
import ErrorPage from "../shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const pageRoutes = [
  {
    path: "/",
    element: <PrivateRoute element={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin/home",
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
      //client routes
      {
        path: "/home",
        element: <ClientHome />,
      },
      {
        path: "/payment",
        element: <ClientPayment />,
      },
      {
        path: "/complains-service",
        element: <ClientComplains />,
      },
      {
        path: "*",
        element: <h1>404 Page Not Found</h1>,
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
