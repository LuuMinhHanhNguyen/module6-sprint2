import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import "../css/header.css";
import { getAppUserInfoFromJwtToken } from "../service/LogInService";

export default function Header() {
  const [appUser, setAppUser] = useState({});

  const extractToken = () => {
    console.log("heheheh");
    const temp = getAppUserInfoFromJwtToken();
    if (temp !== null) {
      console.log("hi");
      console.log(temp.appUser);
      setAppUser(temp.appUser);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("JWT");
    setAppUser({});
  };

  useEffect(() => {
    extractToken();
  }, []);

  return (
    <>
      <header className="default-header" style={{ height: "70px" }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                {/* Dropdown */}
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="elements.html">
                      Elements
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Course Details
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="blog-home.html">
                      Blog Home
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Details
                    </a>
                  </div>
                </li>

                <li className="dropdown">
                  <Link
                    to="/log-in"
                    href=""
                    className="header-btn header-cart position-relative dropdown-toggle link-login"
                    data-toggle="dropdown"
                  >
                    <FiUser style={{ width: "25px", height: "25px" }} />
                    {appUser.id && (
                      <small className=" fw-bold w-50 ">
                        {appUser.userName}
                      </small>
                    )}
                  </Link>
                  {appUser.userName && (
                    <>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog-home.html">
                          Profile
                        </a>
                        <Link
                          type="button"
                          onClick={handleLogOut}
                          className="dropdown-item"
                        >
                          Log Out
                        </Link>
                      </div>
                    </>
                  )}
                </li>

                <li>
                  <Link
                    to="/cart"
                    href=""
                    className="header-btn header-cart position-relative"
                  >
                    <FiShoppingCart style={{ width: "25px", height: "25px" }} />
                    <span className="cart-number">7</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
