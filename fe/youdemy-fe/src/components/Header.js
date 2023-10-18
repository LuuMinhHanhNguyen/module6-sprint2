import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import "../css/header.css";
import { getAppUserInfoFromJwtToken } from "../service/LogInService";
import { getCourseTypes } from "../service/CourseTypeService";
import { AiOutlineHeart } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import logo from "../logo-theRedoc.png";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { findAllCarts } from "../redux/cartAction";

export default function Header() {
  const [appUser, setAppUser] = useState({});
  const [courseTypes, setCourseTypes] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer);

  const extractToken = () => {
    console.log("heheheh");
    const temp = getAppUserInfoFromJwtToken();
    if (temp !== null) {
      console.log("hi");
      console.log(temp.appUser);
      setAppUser(temp.appUser);
      dispatch(findAllCarts(temp.appUser.id));
    }
  };

  const loadCourseTypes = async () => {
    const data = await getCourseTypes();
    setCourseTypes(data);
  };

  const handleLogOut = () => {
    localStorage.removeItem("JWT");
    setAppUser({});

    Swal.fire({
      icon: "success",
      title: "Successfully loged out!.",
      showConfirmButton: true,
      timer: "3000",
    });
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    extractToken();
    loadCourseTypes();
  }, []);

  return (
    <>
      <header className="default-header" style={{ height: "70px" }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/">
              {" "}
              <div className="p-0 m-0" style={{ width: "70px" }}>
                <img src={logo} className="w-100" alt="" />
              </div>
            </Link>

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
              className="collapse navbar-collapse p-0 m-0 justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#">About</a>
                </li>

                {/* Dropdown */}

                <li>
                  <Link to="/favorites" className=" d-flex align-items-center">
                    Favorites <AiOutlineHeart className="mx-1"></AiOutlineHeart>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Courses
                  </a>

                  <div className="dropdown-menu">
                    {courseTypes.length > 0 &&
                      courseTypes.map((el) => {
                        return (
                          <HashLink
                            key={`el-${el.id}`}
                            className="dropdown-item"
                            smooth={true}
                            to={`/#${el.name}`}
                          >
                            {el.name}
                          </HashLink>
                        );
                      })}
                  </div>
                </li>
                <li>
                  <Link to="/my-learning">My Learning</Link>
                </li>

                <li className="dropdown">
                  <Link
                    to={appUser.id ? "#" : "/log-in"}
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
                        <button className="dropdown-item fw-bolder text-uppercase">
                          Profile
                        </button>
                        <button
                          type="button"
                          onClick={handleLogOut}
                          className="dropdown-item fw-bolder text-uppercase"
                        >
                          Log Out
                        </button>
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
                    <span className="cart-number">{carts.length}</span>
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
