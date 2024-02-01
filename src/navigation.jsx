import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import NotFound from "./pages/NotFound";
import { lazy } from "react";
import DiscountRulesPage from "./pages/DiscountRulesPage/DiscountRulesPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/rules",
        element: <DiscountRulesPage />,
      },
    ],
  },
]);

export default router;
