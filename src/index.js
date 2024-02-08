import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './features/userform/UserForm';
import LoginForm from './features/loginform/LoginForm';
import UserDashBoard from './features/loginform/Dashboard';
import Profile from './features/loginform/Profile';
import AllProducts from './features/products/AllProducts';
import Cart from './features/products/Cart';
import ViewProduct from './features/products/ViewProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<AllProducts></AllProducts>
      },
      {
      path:"/register",
      element:<UserForm></UserForm>
    },
    {
      path:"/login",
      element:<LoginForm></LoginForm>
    },
    {
      path:"/dashboard",
      element:<UserDashBoard></UserDashBoard>,
      children:[{
        path:"/dashboard",
        element:<AllProducts></AllProducts>
      },
    {
      path:"/dashboard/cart",
      element:<Cart></Cart>
    },  
    {
      path:"/dashboard/profile",
      element:<Profile></Profile>
    },
    {
      path:"/dashboard/:pid",
      element:<ViewProduct></ViewProduct>
    }
    ]
    }  
  ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}><RouterProvider router={router} /></Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
