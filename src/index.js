import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './fonts.css';
import './main.css';
import Hero from './components/hero';
import EmailSubscribe from './components/email-subscribe';
import PricingGrids from './components/pricing-grids';
import ProductModal from './components/product-modal';
import ImageGallery from './components/image-gallery';
import LoginModal from './components/login-modal';
import Clipboard from './components/clipboard';
import ErrorPage from './components/error-page';

const App = () => {
  return (
    <>
      <Hero />
      <LoginModal />
      <EmailSubscribe />
      <PricingGrids />
      <ProductModal />
      <ImageGallery />
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clipboard",
    element: <Clipboard />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);