import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css'
import Hero from './components/hero';
import EmailSubscribe from './components/email-subscribe';
import PricingGrids from './components/pricing-grids';
import ProductModal from './components/product-modal';
import ImageGallery from './components/image-gallery';
import LoginModal from './components/login-modal';

const App = () => {
  return (
    <div>
      <Hero />
      <LoginModal />
      <EmailSubscribe />
      <PricingGrids />
      <ProductModal />
      <ImageGallery />
    </div>
  )
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);