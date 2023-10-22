import { SignInPage } from "../auth/login/Login";
import { Registrations } from "../auth/registration/Registrations";
import Home from "../client/home/Home";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
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
