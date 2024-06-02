import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loginDisplayStyle, setLoginDisplayStyle] = useState("block");
  const [logoutDisplayStyle, setLogoutDisplayStyle] = useState("block");

  const isLocalStorageEmpty = () => {
    return localStorage.length === 0;
  };

  const handleDisplay = () => {
    if (!isLocalStorageEmpty()) {
      setLoginDisplayStyle("none");
      setLogoutDisplayStyle("block");
    } else {
      setLoginDisplayStyle("block");
      setLogoutDisplayStyle("none");
    }
  };

  useEffect(() => {
    handleDisplay();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    handleDisplay();
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Library
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Borrowed_Books">
                    Borrowed Books
                  </Link>
                </li>
                <li className="nav-item dropdown" onClick={handleDisplay}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Login"
                        style={{ display: loginDisplayStyle }}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/register"
                        style={{ display: loginDisplayStyle }}
                      >
                        register
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/AdminLogin"
                        style={{ display: loginDisplayStyle }}
                      >
                        Admin Login
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        style={{ display: logoutDisplayStyle }}
                        onClick={handleLogout}
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
