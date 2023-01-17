import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginCard from './components/login-card';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <head>
      <link href="../assets/css/fontawesome.css" rel="stylesheet">
      <link href="../assets/css/brands.css" rel="stylesheet">
      <link href="../assets/css/solid.css" rel="stylesheet">
    </head> */}
    <body>
      <LoginCard />
      <Footer />
    </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
