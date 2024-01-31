import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserRegistrationForm from './UserRegistrationForm';
import LoginForm from './LoginForm';
import UserDashBoard from './Dashboard';
import Profile from './Profile';
import Products from './Products';
import Cart from './Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: '/register',
      element: <UserRegistrationForm></UserRegistrationForm>
    },
    {
      path: '/login',
      element: <LoginForm></LoginForm>
    },
    {
      path: '/dashboard',
      element: <UserDashBoard></UserDashBoard>,
      children: [{
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard',
        element: <Products></Products>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
    ]
    }]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
