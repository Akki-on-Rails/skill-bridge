import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginCard from './components/login-card';
import Footer from './components/footer';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      <div className={ 'body_wrapper' }>
        <Header />
        <LoginCard />
        <Footer />
      </div>
    </body>
  </React.StrictMode>
);

