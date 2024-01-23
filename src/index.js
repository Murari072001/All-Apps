import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact';
import Products from './Products';
import Hardware from './AllProducts/Hardware';
import Software from './AllProducts/Software';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path:'/home',
      element: <Home></Home>
    },
    {
      path:'/countries',
      element:<Countries></Countries>,
      children:[{
        path:'countrydetails/:cname',
        element:<CountryDetails></CountryDetails>
      }]
    },
    {
      path:'/products',
      element: <Products></Products>,
      children:[
        {
          path:'hardware',
          element:<Hardware></Hardware>
        },
        {
          path:'software',
          element:<Software></Software>
        }
      ]
    },
    {
    path:'/contact',
    element:<Contact></Contact>
      },
    {
      path:'/about',
      element:<About></About>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} ></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
