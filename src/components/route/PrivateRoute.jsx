import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element }) {
  const validUser = sessionStorage.getItem("validUser") || null;
  const redirectPath = "/sign-in";
  if (!validUser) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
}
