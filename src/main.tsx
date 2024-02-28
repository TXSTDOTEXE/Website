import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './components/Home/Home.tsx';
import MembersPage from './components/MembersPage/MembersPage.tsx';
import NotFound from './components/NotFound/NotFound.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * The webpage's routes. Add or delete routes if needed.
 * Make sure to create routes in the array of the children property.
 */
const browserRouter = createBrowserRouter([
 {
  path: "/Website",
  element: App(),
  children: [
    {
      path: "/Website/",
      element: Home()
    },
    {
      path: "/Website/members",
      element: MembersPage()
    },

    // Add more routes here if needed...

    // Below is to handle non-existant urls
    {
      path: "*",
      element: <NotFound />
    }
  ]
 },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
)
