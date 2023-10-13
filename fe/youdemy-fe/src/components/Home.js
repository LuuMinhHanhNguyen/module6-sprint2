import React, { useEffect, useState } from "react";
import "../css/bootstrap.css";
import "../css/linearicons.css";
import "../css/font-awesome.min.css";
import "../css/bootstrap.css";
import "../css/magnific-popup.css";
import "../css/owl.carousel.css";

import "../css/hexagons.min.css";
import "../css/main.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAppUserInfoFromJwtToken } from "../service/LogInService";
import { getAllCourse } from "../service/CourseService";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const loadAllCourses = async () => {
    const data = await getAllCourse();
    setCourses(data);
    console.log(data);
  };

  useEffect(() => {
    loadAllCourses();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />

      <section className="pt-5 mt-5">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "550px" }}>
              <img
                src="https://www.fastinfoclass.com/blogs/asset/upload/feature_images/Importance_of_English_Speaking_Course_copy.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: "550px" }}>
              <img
                src="https://treecampus.in/wp-content/uploads/2022/09/1.png"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" style={{ height: "550px" }}>
              <img
                src="https://www.edufutureit.com/assets/images/courses/futureit/ITM000047.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className=" each-kind mt-5 mx-5">
          <h2 className="px-5 my-0 fw-bolder">Essential IELTS Courses</h2>
          <Carousel responsive={responsive}>
            {courses.length > 0 &&
              courses
                .filter((temp) => temp.courseType.name == "IELTS")
                .map((el) => {
                  return (
                    <>
                      <div
                        className="single-popular-course py-5 mb-3"
                        style={{ width: "270px" }}
                      >
                        <div className="thumb">
                          <div
                            style={{ height: "200px" }}
                            className=" d-flex justify-content-center"
                          >
                            <Link to={`/details/${el.id}`}>
                              <img
                                className=" w-100 h-100 mx-auto col"
                                src={el.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="details px-1">
                          <Link to={`/details/${el.id}`}>
                            <h5 className=" fw-bolder">
                              {el.name} - Learn IELTS Course Online
                            </h5>
                          </Link>
                          <div className="d-flex flex-column justify-content-between">
                            <p className="name">{el.appUser.userName}</p>
                            <p className="value m-0">$ {el.price}</p>
                          </div>
                          <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small className="d-inline-block">
                              77 lectures • All levels • 25 Reviews
                            </small>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
          </Carousel>
        </div>

        <div className=" each-kind mt-5 mx-5">
          <h2 className="px-5 my-0 fw-bolder">Essential TOEIC Courses</h2>
          <Carousel responsive={responsive}>
            {courses.length > 0 &&
              courses
                .filter((temp) => temp.courseType.name == "TOEIC")
                .map((el) => {
                  return (
                    <>
                      <div
                        className="single-popular-course py-5 mb-3"
                        style={{ width: "270px" }}
                      >
                        <div className="thumb">
                          <div
                            style={{ height: "200px" }}
                            className=" d-flex justify-content-center"
                          >
                            <Link to={`/details/${el.id}`}>
                              <img
                                className=" w-100 h-100 mx-auto col"
                                src={el.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="details px-1">
                          <Link to={`/details/${el.id}`}>
                            <h5 className=" fw-bolder">
                              {el.name} - Learn TOEIC Course Online
                            </h5>
                          </Link>
                          <div className="d-flex flex-column justify-content-between">
                            <p className="name">{el.appUser.userName}</p>
                            <p className="value m-0">$ {el.price}</p>
                          </div>
                          <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small className="d-inline-block">
                              77 lectures • All levels • 25 Reviews
                            </small>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
          </Carousel>
        </div>

        <div className=" each-kind mt-5 mx-5">
          <h2 className="px-5 my-0 fw-bolder">Essential TOEFL Courses</h2>
          <Carousel responsive={responsive}>
            {courses.length > 0 &&
              courses
                .filter((temp) => temp.courseType.name == "TOEFL")
                .map((el) => {
                  return (
                    <>
                      <div
                        className="single-popular-course py-5 mb-3"
                        style={{ width: "270px" }}
                      >
                        <div className="thumb">
                          <div
                            style={{ height: "200px" }}
                            className=" d-flex justify-content-center"
                          >
                            <Link to={`/details/${el.id}`}>
                              <img
                                className=" w-100 h-100 mx-auto col"
                                src={el.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="details px-1">
                          <Link to={`/details/${el.id}`}>
                            <h5 className=" fw-bolder">
                              {el.name} - Learn TOEFL Course Online
                            </h5>
                          </Link>
                          <div className="d-flex flex-column justify-content-between">
                            <p className="name">{el.appUser.userName}</p>
                            <p className="value m-0">$ {el.price}</p>
                          </div>
                          <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small className="d-inline-block">
                              77 lectures • All levels • 25 Reviews
                            </small>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
          </Carousel>
        </div>

        <div className=" each-kind mt-5 mx-5">
          <h2 className="px-5 my-0 fw-bolder">
            Essential DAILY CONVERSATION Courses
          </h2>
          <Carousel responsive={responsive}>
            {courses.length > 0 &&
              courses
                .filter((temp) => temp.courseType.name == "DAILY CONVERSATION")
                .map((el) => {
                  return (
                    <>
                      <div
                        className="single-popular-course py-5 mb-3"
                        style={{ width: "270px" }}
                      >
                        <div className="thumb">
                          <div
                            style={{ height: "200px" }}
                            className=" d-flex justify-content-center"
                          >
                            <Link to={`/details/${el.id}`}>
                              <img
                                className=" w-100 h-100 mx-auto col"
                                src={el.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="details px-1">
                          <Link to={`/details/${el.id}`}>
                            <h5 className=" fw-bolder">
                              {el.name} - Learn DAILY CONVERSATION Course Online
                            </h5>
                          </Link>
                          <div className="d-flex flex-column justify-content-between">
                            <p className="name">{el.appUser.userName}</p>
                            <p className="value m-0">$ {el.price}</p>
                          </div>
                          <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small className="d-inline-block">
                              77 lectures • All levels • 25 Reviews
                            </small>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
          </Carousel>
        </div>

        <div className=" each-kind mt-5 mx-5">
          <h2 className="px-5 my-0 fw-bolder">
            Essential ENGLISH SPEAKING Courses
          </h2>
          <Carousel responsive={responsive}>
            {courses.length > 0 &&
              courses
                .filter((temp) => temp.courseType.name == "ENGLISH SPEAKING")
                .map((el) => {
                  return (
                    <>
                      <div
                        className="single-popular-course py-5 mb-3"
                        style={{ width: "270px" }}
                      >
                        <div className="thumb">
                          <div
                            style={{ height: "200px" }}
                            className=" d-flex justify-content-center"
                          >
                            <Link to={`/details/${el.id}`}>
                              <img
                                className="col w-100 h-100 p-0 custom-pointer"
                                src={el.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="details px-1">
                          <Link to={`/details/${el.id}`}>
                            <h5 className=" fw-bolder custom-pointer">
                              {el.name} - Learn ENGLISH SPEAKING Course Online
                            </h5>
                          </Link>
                          <div className="d-flex flex-column justify-content-between">
                            <p className="name">{el.appUser.userName}</p>
                            <p className="value m-0">$ {el.price}</p>
                          </div>
                          <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                            <small className="star">
                              4.2{" "}
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star checked text-warning" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> (2277 ratings)
                            </small>
                            <small className="d-inline-block">
                              77 lectures • All levels • 25 Reviews
                            </small>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
          </Carousel>
        </div>
      </section>

      <Footer />
    </>
  );
}
