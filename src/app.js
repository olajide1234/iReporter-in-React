import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './appRouters/AppRouter';

const App = () => (
  <div>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </div>
);

export default App;
