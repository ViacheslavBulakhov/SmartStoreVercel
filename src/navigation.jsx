import { createBrowserRouter } from 'react-router-dom';

import NotFound from './pages/NotFound';
// import { lazy } from 'react';

import HomePage from './pages/HomePage/HomePage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import DiscountRulesPage from './pages/DiscountRulesPage/DiscountRulesPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import SharedLayout from './SharedLayout/SharedLayout';
import SharedLayoutForGoods from './SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods';
import AdminPage from './pages/AdminPage/AdminPage';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage'));
// const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage'));
// const DiscountRulesPage = lazy(() =>
//   import('./pages/DiscountRulesPage/DiscountRulesPage')
// );

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
        path: '/payment',
        element: <PaymentPage />,
      },

      {
        path: '/rules',
        element: <DiscountRulesPage />,
      },

      { path: '/delivery', element: <DeliveryPage /> },

      {
        path: '/goods',
        element: <SharedLayoutForGoods />,
      },

      {
        path: '/goods/:goodsName',
        element: <SharedLayoutForGoods />,
      },

      { path: '/goods/:goodsName/:id', element: <SharedLayoutForGoods /> },

      {
        path: '/goods/:goodsName/:id/:nestedId',
        element: <SharedLayoutForGoods />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

export default router;
