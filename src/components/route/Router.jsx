import { Elements } from "@stripe/react-stripe-js";
import Customers from "../admin/customers/Customers";
import Home from "../admin/home/Home";
import { SignInPage } from "../auth/login/Login";
import { Registrations } from "../auth/registration/Registrations";
import ClientComplains from "../client/complains/ClientComplains";
import ClientHome from "../client/home/ClientHome";
import CheckoutForm from "../client/payments/CheckoutForm";
import ClientPayment from "../client/payments/ClientPayment";
import PaymentCard from "../client/payments/PaymentCard";
import Layout from "../layout/Layout";
import ErrorPage from "../shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import { loadStripe } from "@stripe/stripe-js";
import AdminComplains from "../admin/complains/AdminComplains";

export const PageRoutes = [
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
        path: "/admin/complains-service",
        element: <AdminComplains />,
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
