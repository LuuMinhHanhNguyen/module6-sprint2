import React, { useEffect, useState } from "react";
import { getAllPurchases } from "../service/PurchaseService";
import { Link } from "react-router-dom";
import { getAppUserInfoFromJwtToken } from "../service/LogInService";
import { AiFillHeart } from "react-icons/ai";
import Header from "./Header";
import Footer from "./Footer";

export default function MyLearning() {
  const [appUser, setAppUser] = useState({});
  const [myCourses, setMyCourses] = useState([]);

  const extractToken = () => {
    console.log("heheheh");
    const temp = getAppUserInfoFromJwtToken();
    if (temp !== null) {
      console.log("hi");
      console.log(temp.appUser);
      setAppUser(temp.appUser);
    }
  };

  const loadMyCourses = async () => {
    const data = await getAllPurchases(appUser.id);
    setMyCourses(data);
    console.log(data);
  };

  useEffect(() => {
    extractToken();
  }, []);

  useEffect(() => {
    if (appUser.id) {
      loadMyCourses(appUser.id);
    }
  }, [appUser.id]);

  return (
    <>
      {/* <Header /> */}
      <h1
        style={{ marginTop: "100px" }}
        className="mb-0 p-0 fw-bolder text-center"
      >
        My Learning{" "}
        <AiFillHeart
          style={{ color: "palevioletred", height: "30px", width: "30px" }}
        ></AiFillHeart>
      </h1>
      {myCourses.length > 0 && (
        <p className="text-center fw-bold">
          ({myCourses.length < 10 && "0"}
          {myCourses.length} course
          {myCourses.length > 1 ? "s" : ""})
        </p>
      )}
      <div
        className=" row justify-content-center row-cols-md-4 row-cols-2 gap-4"
        style={{ marginTop: "50px" }}
      >
        {myCourses.length > 0 ? (
          myCourses.map((el) => {
            return (
              <div
                key={`el-${el.id}`}
                className="single-popular-course mb-3"
                style={{ width: "300px" }}
              >
                <div className="thumb">
                  <div
                    style={{ height: "200px" }}
                    className=" d-flex justify-content-center"
                  >
                    <Link to={`/details/${el.course.id}`}>
                      <img
                        className=" w-100 h-100 mx-auto col"
                        src={el.course.image}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="details pb-3 px-1">
                  <Link to={`/details/${el.course.id}`}>
                    <h5 className=" fw-bolder">
                      {el.course.name} - Learn {el.course.courseType.name}{" "}
                      Course Online
                    </h5>
                  </Link>
                  <div className="d-flex flex-column justify-content-between">
                    <p className="name">{el.course.appUser.userName}</p>
                  </div>
                  <div className="bottom d-flex align-items-start flex-column align-items-start  justify-content-start">
                    <small className="star">
                      4.2 <i className="fa fa-star checked text-warning" />
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
            );
          })
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg"
                className=" w-100"
              ></img>
              <div>
                <Link to="/" className="btn payment-btn fw-bold py-2">
                  ← Browse courses now
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}
