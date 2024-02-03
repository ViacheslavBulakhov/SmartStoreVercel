import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import NotFound from './pages/NotFound';
import { lazy } from 'react';
import DiscountRulesPage from './pages/DiscountRulesPage/DiscountRulesPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/chohly',
        element: <h1>ВСІ ЧОХЛИ</h1>,
      },
      {
        path: '/glass',
        element: <h1>all Glass </h1>,
      },
      {
        path: '/headphone',
        element: <h1>all Headphone</h1>,
      },
      {
        path: '/accessories',
        element: <h1> all Accessories</h1>,
      },
      {
        path: '/HomeApliances',
        element: <h1> all HomeApliances</h1>,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
      {
        path: '/rules',
        element: <DiscountRulesPage />,
      },
      { path: '/delivery', element: <DeliveryPage /> },
    ],
  },
]);

export default router;
