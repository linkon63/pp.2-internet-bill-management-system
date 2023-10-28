import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element }) {
  const validUser = sessionStorage.getItem("validUser") || null;
  const redirectPath = "/sign-in";
  if (!validUser) {
    console.log("not login user", validUser);
    return <Navigate to={redirectPath} replace />;
  }
  console.log("login user", validUser);
  return element;
}
