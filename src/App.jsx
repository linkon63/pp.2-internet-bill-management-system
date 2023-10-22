import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { pageRoutes } from "./components/route/router";

function App() {
  const router = createBrowserRouter(pageRoutes);
  return <RouterProvider router={router} />;
}

export default App;
