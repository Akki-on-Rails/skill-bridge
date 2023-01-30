import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginCard from './components/login-card';
import Footer from './components/footer';
import Header from './components/header';
import IntroBlock from './components/intro-block';
import BulletListFeatures from './components/bullet-list';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={ 'body_wrapper' }>
      <Header />
      <body>
        <div className={ 'double_block' }>
          <IntroBlock />
        </div>
        <BulletListFeatures />
        {/* <LoginCard /> */}
      </body>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
