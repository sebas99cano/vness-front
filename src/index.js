import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './views/routes/AppRouter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/helpers/styles/index.scss"

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

