import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageRoutes } from "./components/route/Router";
import { PrimeReactProvider } from 'primereact/api';
function App() {
  const router = createBrowserRouter(PageRoutes);
  return <PrimeReactProvider>
    <RouterProvider router={router} />
  </PrimeReactProvider>
}

export default App;
