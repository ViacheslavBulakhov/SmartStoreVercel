import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import NotFound from "./pages/NotFound";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
export default router;
