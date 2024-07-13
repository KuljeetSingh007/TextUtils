import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import SwitchTheme from './switchTheme';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App /> 
//   },
 
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <SwitchTheme /> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//  <App />