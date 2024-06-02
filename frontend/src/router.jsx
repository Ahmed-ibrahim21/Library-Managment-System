import React from "react";
import App from "./App";
import Home from "./Componenets/Home/Home";
import Login from "./Componenets/LoginForm/Login";
import UserBorrowedBooks from "./Componenets/UserBorrowedBooks/UserBorrowedBooks";
import Register from "./Componenets/Register/Register";
import AdminLogin from "./Componenets/AdminLogin/AdminLogin";
import AdminHome from "./Componenets/AdminHome/AdminHome";
import ManageBorrowRequests from "./Componenets/ManageBorrowRequests/ManageBorrowRequests";
import BookCRUD from "./Componenets/BookCRUD/BookCRUD";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Borrowed_Books",
        element: <UserBorrowedBooks />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/AdminLogin",
        element: <AdminLogin />,
      },
      {
        path: "/AdminHome",
        element: <AdminHome />,
      },
      {
        path: "/ManageBorrowRequests",
        element: <ManageBorrowRequests />,
      },
      {
        path: "/BookCRUD",
        element: <BookCRUD />,
      },
    ],
  },
]);
