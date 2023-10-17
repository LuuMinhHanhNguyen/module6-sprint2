import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Rating from "react-rating";
import { useNavigate, useParams } from "react-router-dom";
import { getAllVideos } from "../service/VideoService";
import { findCourse } from "../service/CourseService";
import ReactPlayer from "react-player";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "../css/details.css";
import { checkFavorites, addToFavorites } from "../service/FavoriteService";
import { getAppUserInfoFromJwtToken } from "../service/LogInService";
import { addToCart } from "../service/CartService";
import { getAllPurchases } from "../service/PurchaseService";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { findAllCarts } from "../redux/cartAction";
import { getAllComments, saveComment } from "../service/CommentService";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [course, setCourse] = useState({});
  const [isFavorite, setIsFavorite] = useState({});
  const [appUser, setAppUser] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const [myCourses, setMyCourses] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  const extractToken = () => {
    console.log("heheheh");
    const temp = getAppUserInfoFromJwtToken();
    if (temp !== null) {
      console.log("hi");
      console.log(temp.appUser);
      setAppUser(temp.appUser);
    }
  };

  const loadAllVideos = async () => {
    const data = await getAllVideos(id);
    setVideos(data);
    setVideoUrl(data[0].urlPath);
  };

  const loadCourse = async () => {
    const data = await findCourse(id);
    setCourse(data);
    console.log("course");
    console.log(course);
  };

  const loadFavorite = async (appUserId) => {
    const data = await checkFavorites(appUserId, course.id);
    setIsFavorite(data);
    console.log("favorite");
    console.log(data);
  };

  const loadMyCourses = async () => {
    const data = await getAllPurchases(appUser.id);
    setMyCourses(data);
    console.log(data);
  };

  const loadComments = async () => {
    // this is the {id} from useParams
    const data = await getAllComments(id);
    setComments(data);
  };

  const handleHeartClick = async () => {
    if (appUser.id) {
      const data = await addToFavorites(appUser.id, course.id);
      setIsUpdated(!isUpdated);
    } else {
      Swal.fire(
        "Please sign in your account to use this function!",
        "",
        "warning"
      );
      navigate("/log-in");
    }
  };

  const handleAddToCart = async () => {
    if (!appUser.id) {
      Swal.fire("Please sign in your account!", "", "warning");
      navigate("/log-in");
    } else {
      const response = await addToCart(appUser.id, course.id);
      dispatch(findAllCarts(appUser.id));
      toast.info("Course added successfully!");
    }
  };

  const handleChangeVideoPath = (urlPath) => {
    setVideoUrl(urlPath);
    setIsUpdated(!isUpdated);
    window.scrollTo(0, 0);
  };

  const handleSubmitReview = async () => {
    const comment = document.getElementById("feedback").value;
    console.log(comment);
    if (!appUser.id) {
      Swal.fire(
        "You need to enroll in this course to leave feedback!",
        "",
        "warning"
      );
    } else {
      try {
        const save = await saveComment(appUser.id, id, comment);
        setIsUpdated(!isUpdated);
        document.getElementById("feedback").value = "";
      } catch (er) {
        console.error(er);
        if (er.response) {
          console.log(er.response.data);
          console.log(er.response.status);
          if (er.response.status === 405) {
            Swal.fire(
              "Sorry! You already left your feedback some time ago!",
              "",
              "info"
            );
            setIsUpdated(!isUpdated);
            document.getElementById("feedback").value = "";
          }
          if (er.response.status === 406) {
            Swal.fire(
              "You need to enroll in this course to leave feedback!",
              "",
              "warning"
            );
            setIsUpdated(!isUpdated);
            document.getElementById("feedback").value = "";
          }
        }
      }
    }
  };

  useEffect(() => {
    if (appUser.id) {
      loadMyCourses(appUser.id);
    }
  }, [appUser.id]);

  useEffect(() => {
    loadAllVideos();
    loadCourse();
  }, []);

  useEffect(() => {
    extractToken();
  }, []);

  useEffect(() => {
    if (appUser.id && course.id) {
      loadFavorite(appUser.id, course.id);
    }
  }, [appUser.id, course.id, isUpdated]);

  useEffect(() => {
    loadComments();
  }, [isUpdated]);

  return (
    <>
      {/* <Header /> */}
      <section className="course-details-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 course-details-left">
              <div className="main-image">
                {videos.length > 0 && (
                  <ReactPlayer
                    url={videoUrl}
                    id="url-path-for-video"
                    controls="true"
                    width="100%"
                  />
                )}
              </div>
              <div className="content-wrapper">
                <h4 className="title">Objectives</h4>
                {course.id && (
                  <>
                    <div className="content">{course.description}</div>
                    <h4 className="title">Description</h4>
                    <div className="content">
                      <p>
                        Learn everything about English grammar, English
                        speaking, and English writing. Use perfect English
                        grammar in real conversations. Get high scores for
                        English grammar exams like A1, A2, B1, B2, C1, TOEFL,
                        IELTS, and TOEIC. Upgrade your speaking, listening, and
                        writing with better English grammar. Accent Training:
                        Build an American or British accent. Master English
                        writing with English punctuation and sentence structure
                        section. Learn to speak about 27 different daily topics.
                        Professional English pronunciation practice activities.
                      </p>
                      <div className=" mb-3">
                        <p className=" fw-bold d-inline">
                          English Grammar Section:
                        </p>
                        Over 90 different English grammar topics. No other
                        course covers as many English Grammar topics. Full video
                        lessons and conversations showing you the English
                        grammar in use. You will learn to score higher on your
                        English exams like TOEIC, IELTS, or TOEFL. Hundred of
                        practice problems and examples. Full-length PDFs for
                        offline learning.
                      </div>
                      <div className=" mb-3">
                        <p className=" fw-bold d-inline">
                          English Speaking Section:
                        </p>{" "}
                        Learn to speak like a native English speaker. Learn how
                        to talk about 27 different topics. Learn hundreds of new
                        English vocabulary, verbs, and phrases. Improve your
                        accent and gain confidence while speaking. Includes
                        American and British audio so you can pick which accent
                        to learn. 75 full-length real conversations with native
                        English speakers allowing you to truly master the
                        English language.
                      </div>
                      <div className=" mb-3">
                        <p className=" fw-bold d-inline">
                          English Writing Section:
                        </p>
                        Learn the grammar behind English sentences and their
                        different structures. Master all 14 English punctuation
                        marks so you can write better and more professionally.
                        Get that new job you want or better grades in school.
                        Hundreds of examples and writing practice problems.
                        Full-length PDFs and video lessons.
                      </div>
                      <div className=" mb-3">
                        <p className=" fw-bold d-inline">
                          English Pronunciation Section:
                        </p>
                        Build the perfect English accent. The accent training
                        section covers all the sounds of the English language.
                        Learn how to make each sound correctly. In addition,
                        train your accent with professional voice actors using
                        state-of-the-art accent training activities. Pick an
                        American or British accent.
                      </div>
                      <div className=" mb-3">
                        <p className=" fw-bold d-inline">
                          After using this course
                        </p>
                        , you will ace tough English grammar tests such as A1,
                        A2, B1, B2, C1, TOEFL, IETLS, AND TOEIC. You will sound
                        more professional at work and may even get that new job
                        or promotion you want. You will impress people with your
                        new advanced English level. Your English grammar,
                        English speaking, and English writing will all improve.
                        You will develop a British or American accent and sound
                        fluent.
                      </div>
                    </div>
                  </>
                )}

                <h4 className="title">Course Outline</h4>
                <div className="content">
                  <ul className="course-list p-0">
                    {videos.length > 0 &&
                      videos.map((el) => {
                        return (
                          <li
                            key={`vid-${el.id}`}
                            className="justify-content-between d-flex"
                          >
                            <div className=" d-flex align-items-center">
                              <span
                                className="fa fa-star m-0 mx-3"
                                style={{ color: "#eab35f" }}
                              />
                              <p className=" fw-bold m-0">{el.title}</p>
                            </div>

                            {myCourses.find(
                              (temp) => temp.course.id == course.id
                            ) ? (
                              <button
                                className="btn text-uppercase"
                                onClick={() =>
                                  handleChangeVideoPath(el.urlPath)
                                }
                              >
                                View Details
                              </button>
                            ) : (
                              <button
                                className="btn text-uppercase"
                                disabled={el.free == false}
                              >
                                View Details
                              </button>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 right-contents">
              {videos.length > 0 && course.id && (
                <ul>
                  <li>
                    <a className="justify-content-between d-flex" href="#">
                      <p>Trainer’s Name</p>
                      <span className="or">{course.appUser.userName}</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-content-between d-flex" href="#">
                      <p>Course Fee </p>
                      {myCourses.find((temp) => temp.course.id == course.id) ? (
                        <span>Paid</span>
                      ) : (
                        <span>${course.price}</span>
                      )}
                    </a>
                  </li>
                  <li>
                    <a className="justify-content-between d-flex" href="#">
                      <p>Course Type </p>
                      <span>{course.courseType.name}</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-content-between d-flex" href="#">
                      <p>Number Of Lectures </p>
                      <span>{videos.length}</span>
                    </a>
                  </li>
                </ul>
              )}
              <div className=" d-flex justify-content-between align-items-center">
                {myCourses.find((temp) => temp.course.id == course.id) ? (
                  <button
                    type="button"
                    className="btn text-uppercase mt-0 enroll col col-9"
                  >
                    You have enrolled this course!
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="btn text-uppercase mt-0 enroll col col-10"
                  >
                    Enroll the course
                  </button>
                )}

                <div className="col col-2">
                  {isFavorite.id ? (
                    <AiFillHeart
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#bb37de",
                        border: "2px solid #8233fe",
                      }}
                      onClick={() => handleHeartClick(course.id)}
                    ></AiFillHeart>
                  ) : (
                    <AiOutlineHeart
                      style={{
                        width: "50px",
                        height: "50px",
                        color: "#bb37de",
                        border: "2px solid #8233fe",
                      }}
                      onClick={() => handleHeartClick(course.id)}
                    ></AiOutlineHeart>
                  )}
                </div>
              </div>

              <h4 className="title">Reviews</h4>
              <div className="content">
                <div className="review-top row pt-40">
                  <div className="col-lg-12">
                    <h6 className="mb-15">Provide Your Rating</h6>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Puncuality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                  </div>
                </div>
                <div className="feedeback">
                  <h6 className="mb-10">Your Feedback</h6>
                  <textarea
                    id="feedback"
                    name="feedback"
                    className="form-control"
                    cols={10}
                    rows={10}
                    defaultValue={""}
                  />
                  <div className="mt-10 text-right">
                    <button
                      type="button"
                      onClick={handleSubmitReview}
                      className="btn text-center text-uppercase enroll"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="comments-area mb-30">
                  {comments.length > 0 &&
                    comments.map((el) => {
                      return (
                        <div className="comment-list" key={`cmt-${el.id}`}>
                          <div className="single-comment single-reviews justify-content-between d-flex">
                            <div className="user justify-content-between flex-column d-flex">
                              <div className="d-flex justify-content-between">
                                <h5>
                                  <a href="#">{el.appUser.userName}</a>
                                  <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                  </div>
                                </h5>
                                <p>
                                  <small>{el.commentDate}</small>
                                </p>
                              </div>
                              <div className="w-100">
                                <p className="comment">{el.commentText}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  {/* <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/blog/c2.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <h5>
                            <a href="#">Elsie Cunningham</a>
                            <div className="star">
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/blog/c3.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <h5>
                            <a href="#">Maria Luna</a>
                            <div className="star">
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
      <ToastContainer autoClose={2000} className="toast-position" />
    </>
  );
}
