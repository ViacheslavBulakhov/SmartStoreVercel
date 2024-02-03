import { createBrowserRouter } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import NotFound from './pages/NotFound';
import { lazy } from 'react';
import DiscountRulesPage from './pages/DiscountRulesPage/DiscountRulesPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

import { SharedLayoutForGoods } from './components/SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods';

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
]);

export default router;
// children: [
//           {
//             path: '/goods/:chohly',
//             element: <h1>ВСІ ЧОХЛИ</h1>,
//           },
// {
//   path: '/goods/glass',
//   element: <h1>all Glass </h1>,
// },
// {
//   path: '/goods/headphone',
//   element: <h1>all Headphone</h1>,
// },
// {
//   path: '/goods/accessories',
//   element: <h1> all Accessories</h1>,
// },
// {
//   path: '/goods/HomeApliances',
//   element: <h1> all HomeApliances</h1>,
// },
// ],
