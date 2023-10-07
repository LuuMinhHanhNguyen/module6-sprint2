import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import "../css/order.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Cart() {
  return (
    <>
      <Header />
      <div id="hannah" className="pb-5 pt-5">
        <div className="container-fluid p-1 position-relative">
          <h1
            className="text-center my-5 mx-auto fw-bold"
            style={{ color: "#0340c1" }}
          >
            Shopping Cart
          </h1>

          <div className="container-fluid w-100">
            <div className="row">
              <div className=" col col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <table className="table table-hover">
                    <tbody>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <img
                              src="https://www.pharmacity.vn/images/poom-happy.png"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                              }}
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            />
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          <div
                            style={{ cursor: "pointer" }}
                            className=" d-flex flex-column align-items-start justify-content-center mx-2"
                            //   onClick={() =>
                            //     navigate(`/details/${el.medicineId}`)
                            //   }
                          >
                            <p className="m-0">
                              The Complete Android 14 Developer Course - Build
                              100 Apps
                            </p>
                            <small>Dan Hauer</small>
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small>77 lectures • All levels</small>
                          </div>
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">
                          {" "}
                          <button
                            type="button"
                            className="btn mx-5 p-0 "
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#1b41a7",
                            }}
                            // onClick={handleDelete}
                          >
                            Remove
                          </button>
                        </td>
                        {/*                            total price*/}
                        <td
                          className="align-middle text-center fw-bold"
                          style={{ color: "#9435f3" }}
                        >
                          $15.99
                        </td>
                      </tr>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <img
                              src="https://www.pharmacity.vn/images/poom-happy.png"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                              }}
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            />
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          <div
                            style={{ cursor: "pointer" }}
                            className=" d-flex flex-column align-items-start justify-content-center mx-2"
                            //   onClick={() =>
                            //     navigate(`/details/${el.medicineId}`)
                            //   }
                          >
                            <p className="m-0">
                              The Complete Android 14 Developer Course - Build
                              100 Apps
                            </p>
                            <small>Dan Hauer</small>
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small>77 lectures • All levels</small>
                          </div>
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">
                          {" "}
                          <button
                            type="button"
                            className="btn mx-5 p-0 "
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#1b41a7",
                            }}
                            // onClick={handleDelete}
                          >
                            Remove
                          </button>
                        </td>
                        {/*                            total price*/}
                        <td
                          className="align-middle text-center fw-bold"
                          style={{ color: "#9435f3" }}
                        >
                          $15.99
                        </td>
                      </tr>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <img
                              src="https://www.pharmacity.vn/images/poom-happy.png"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                              }}
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            />
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          <div
                            style={{ cursor: "pointer" }}
                            className=" d-flex flex-column align-items-start justify-content-center mx-2"
                            //   onClick={() =>
                            //     navigate(`/details/${el.medicineId}`)
                            //   }
                          >
                            <p className="m-0">
                              The Complete Android 14 Developer Course - Build
                              100 Apps
                            </p>
                            <small>Dan Hauer</small>
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small>77 lectures • All levels</small>
                          </div>
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">
                          {" "}
                          <button
                            type="button"
                            className="btn mx-5 p-0 "
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#1b41a7",
                            }}
                            // onClick={handleDelete}
                          >
                            Remove
                          </button>
                        </td>
                        {/*                            total price*/}
                        <td
                          className="align-middle text-center fw-bold"
                          style={{ color: "#9435f3" }}
                        >
                          $15.99
                        </td>
                      </tr>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <img
                              src="https://www.pharmacity.vn/images/poom-happy.png"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                              }}
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            />
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          <div
                            style={{ cursor: "pointer" }}
                            className=" d-flex flex-column align-items-start justify-content-center mx-2"
                            //   onClick={() =>
                            //     navigate(`/details/${el.medicineId}`)
                            //   }
                          >
                            <p className="m-0">
                              The Complete Android 14 Developer Course - Build
                              100 Apps
                            </p>
                            <small>Dan Hauer</small>
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small>77 lectures • All levels</small>
                          </div>
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">
                          {" "}
                          <button
                            type="button"
                            className="btn mx-5 p-0 "
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#1b41a7",
                            }}
                            // onClick={handleDelete}
                          >
                            Remove
                          </button>
                        </td>
                        {/*                            total price*/}
                        <td
                          className="align-middle text-center fw-bold"
                          style={{ color: "#9435f3" }}
                        >
                          $15.99
                        </td>
                      </tr>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <img
                              src="https://www.pharmacity.vn/images/poom-happy.png"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                              }}
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            />
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          <div
                            style={{ cursor: "pointer" }}
                            className=" d-flex flex-column align-items-start justify-content-center mx-2"
                            //   onClick={() =>
                            //     navigate(`/details/${el.medicineId}`)
                            //   }
                          >
                            <p className="m-0">
                              The Complete Android 14 Developer Course - Build
                              100 Apps
                            </p>
                            <small>Dan Hauer</small>
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small>77 lectures • All levels</small>
                          </div>
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">
                          {" "}
                          <button
                            type="button"
                            className="btn mx-5 p-0 "
                            style={{
                              cursor: "pointer",
                              fontSize: "14px",
                              color: "#1b41a7",
                            }}
                            // onClick={handleDelete}
                          >
                            Remove
                          </button>
                        </td>
                        {/*                            total price*/}
                        <td
                          className="align-middle text-center fw-bold"
                          style={{ color: "#9435f3" }}
                        >
                          $15.99
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Link
                    to="/home"
                    className="btn btn-outline-primary mb-5 back-btn"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 container position-relative">
                <div className="shadow rounded p-3 mb-5 position-sticky custom-cart">
                  <div>
                    <div className="text-secondary fs-5 fw-bold">TOTAL</div>
                    <hr className="text-secondary h-2" />
                    <div className="">
                      <div className="border-bottom mb-2 pb-2">
                        <span className=" fw-bold">SUB TOTAL:</span>
                        <span className="fw-bold" style={{ float: "right" }}>
                          $222.99
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-100 btn payment-btn mt-3 fw-bold"
                      style={{ color: "white" }}
                      //   onClick={proceedOrder}
                      //   disabled={showCf}
                    >
                      PROCEED PAYMENT
                    </button>
                    <hr />
                    <div id="paypal-button-container" className="w-50"></div>
                  </div>
                  {/*                payment*/}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="d-flex justify-content-center align-items-center flex-column">
              <img src="https://www.pharmacity.vn/images/empty-image.png"></img>
              <p className="col col-md-3 col-8 mb-3 text-center">
                Tiếc quá! RetroCare không tìm thấy sản phẩm nào trong giỏ hàng
                của bạn.
              </p>
              <div>
                <Link
                  to="/home"
                  className="btn"
                  style={{ background: "orange" }}
                >
                  ← Tiếp tục xem sản phẩm
                </Link>
              </div>
            </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
