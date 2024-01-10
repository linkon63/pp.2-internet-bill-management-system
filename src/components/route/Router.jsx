import Customers from "../admin/customers/Customers";
import ClientComplains from "../client/complains/ClientComplains";
import ClientHome from "../client/home/ClientHome";
import CheckoutForm from "../client/payments/CheckoutForm";
import ClientPayment from "../client/payments/ClientPayment";
import Layout from "../layout/Layout";
import ErrorPage from "../shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AdminComplains from "../admin/complains/AdminComplains";
import AdminDashboard from "../admin/dashboard/AdminDashboard";
import { SignInPage } from "../auth/login/Login";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const PageRoutes = [
  {
    path: "/",
    element: <PrivateRoute element={<Layout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/home",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
      {
        path: "/admin/complains-service",
        element: <AdminComplains />,
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
        path: "/payment/v1",
        element: (
          <Elements
            stripe={loadStripe(
              "pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv"
            )}
          >
            <CheckoutForm />
          </Elements>
        ),
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
  // {
  //   path: "/sign-up",
  //   element: <Registrations />,
  // },
];
