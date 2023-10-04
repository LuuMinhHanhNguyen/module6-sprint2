import React from "react";
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
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ANH from "../img/popular-course/p1.jpg";
import "../js/swiper";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
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
        <div className=" each-kind my-0">
          <h2 className="px-5 my-0">Essential TOEIC Coursed</h2>
          <Carousel responsive={responsive}>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className=" each-kind my-0">
          <h2 className="px-5 my-0">Essential TOEIC Coursed</h2>
          <Carousel responsive={responsive}>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h5>
                    Learn Angular JS Course for Legendary Persons Learn Angular
                    JS Course for Legendary Persons
                  </h5>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className=" each-kind my-0">
          <h2 className="px-5 my-0">Essential TOEIC Coursed</h2>
          <Carousel responsive={responsive}>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
            <div className="single-popular-course py-5 mx-3">
              <div className="thumb">
                <img className="f-img img-fluid mx-auto" src={ANH} alt="" />
              </div>
              <div className="details px-1">
                <a href="#">
                  <h4>Learn Angular JS Course for Legendary Persons</h4>
                </a>
                <div className="d-flex justify-content-between mb-20">
                  <p className="name">Dan Hauer</p>
                  <p className="value">$150</p>
                </div>
                <div className="bottom d-flex align-items-baseline mt-15">
                  <ul className="list">
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" />
                      </a>
                    </li>
                  </ul>
                  <p className="ml-20">25 Reviews</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <Footer />
    </>
  );
}
