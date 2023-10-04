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
          <h1 className="text-center my-5 mx-auto" style={{ color: "#0340c1" }}>
            Shopping Cart
          </h1>

          <div className="container-fluid w-100">
            <div className="row">
              <div className=" col col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                <div className=" d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn mx-5 p-0 text-primary"
                    style={{
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    // onClick={handleCheckedAll}
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    className="btn mx-5 p-0 text-primary"
                    style={{
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    // onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <table className="table table-hover">
                    <thead className="text-secondary">
                      <tr className="text-center fw-bold">
                        <td>Course</td>
                        <td>Author</td>
                        <td>Number Of Lectures</td>
                        <td>Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                      //   key={`el_${el.cartId}`}
                      >
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                            <span>
                              <input
                                // id={`el_${el.cartId}`}
                                type="checkbox"
                                name="multiSelect"
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginRight: "20px",
                                }}
                                // onChange={() => handleMultiSelect(el)}
                              />
                            </span>
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
                            <div
                              style={{ cursor: "pointer" }}
                              className="text-center align-middle mx-2"
                              //   onClick={() =>
                              //     navigate(`/details/${el.medicineId}`)
                              //   }
                            >
                              <div>
                                The Complete Android 14 Developer Course - Build
                                100 Apps
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className=" text-center align-middle fw-bold">
                          Dan Hauer
                        </td>
                        {/*                            quantity*/}
                        <td className="align-middle">22</td>
                        {/*                            total price*/}
                        <td className="align-middle text-center fw-bold">
                          $15
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Link to="/home" className="btn btn-outline-primary mb-5">
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
                          {/* {currency(totalPrice)} VNĐ */}
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-100 btn btn-warning mt-3 fw-bold"
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
