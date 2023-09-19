import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import Gallery from './Gallery';
import Gallory from './Gallory';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
  

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/overview",
    element: <div><Gallory/></div>,
  },
  {
    path:"/gallery",
    element:
    <>
    <SignedIn>
      <Gallery />
    </SignedIn>
      <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
    <ClerkProvider publishableKey={clerkPubKey}>
    <RouterProvider router={router} >

    </RouterProvider>
    </ClerkProvider>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
