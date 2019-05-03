import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './appRouters/AppRouter';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
