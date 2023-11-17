import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageRoutes } from "./components/route/Router";

function App() {
  const router = createBrowserRouter(PageRoutes);
  return <RouterProvider router={router} />;
}

export default App;
