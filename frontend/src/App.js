import logo from "./logo.svg";
import "./App.css";
import Header from "./Componenets/Header/Header";
import Home from "./Componenets/Home/Home";
import Login from "./Componenets/LoginForm/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
