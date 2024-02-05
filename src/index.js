import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Countries from './features/Countries/Countries';
import CountryDetails from './features/Countries/CountryDetails';
import Employee from './features/Emoplyees/Employee';
import AddNewEmployee from './features/Emoplyees/AddNewEmployee';
import UpdateEmployee from './features/Emoplyees/UpdateEmployee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{
      path: "/countries",
      element: <Countries></Countries>
    },
    {
      path: "/countryDetails/:cid",
      element: <CountryDetails></CountryDetails>
    },
    {
      path: "/employees",
      element: <Employee></Employee>
    },
    {
      path: "/employees/addnewemp",
      element: <AddNewEmployee></AddNewEmployee>
    },
    {
      path: "/employees/editemp/:cid",
      element: <UpdateEmployee></UpdateEmployee>
    }]
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
