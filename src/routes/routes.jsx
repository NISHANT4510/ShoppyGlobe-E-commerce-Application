import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ProductList = lazy(() => import('../components/ProductList'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const Cart = lazy(() => import('../components/Cart'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const NotFound = lazy(() => import('../components/NotFound'));

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProductList />
      },
      {
        path: '/products',
        element: <Navigate to="/" replace />
      },
      {
        path: '/product/:id',
        element: <ProductDetailPage />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
