import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Gallery from './Gallery';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Signup';
import Login from './Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/signup",
    element: <div><Signup/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/gallery",
    element: <div><Gallery/></div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
