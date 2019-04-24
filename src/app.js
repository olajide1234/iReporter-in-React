import './index.css';
import React from 'react';
import AppRouter from './appRouters/AppRouter';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => (
  <div>
    <Header />
    <AppRouter />
    <Footer />
  </div>
);

export default App;
