import React from "react";

export default function LogIn() {
  return (
    <>
      {/* ? Preloader Start */}
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Preloader Start*/}
      <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
        {/* Login Admin */}
        <form className="form-default" action="login-bg.mp4" method="POST">
          <div className="login-form">
            {/* logo-login */}
            <div className="logo-login">
              <a href="index.html">
                <img src="assets/img/logo/loder.png" alt="" />
              </a>
            </div>
            <h2>Login Here</h2>
            <div className="form-input">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-input">
              <label htmlFor="name">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" defaultValue="login" />
            </div>
            {/* Forget Password */}
            <a href="#" className="forget">
              Forget Password
            </a>
            {/* Forget Password */}
            <a href="register.html" className="registration">
              Registration
            </a>
          </div>
        </form>
        {/* /end login form */}
      </main>
      {/* Jquery, Popper, Bootstrap */}
      {/* Jquery Mobile Menu */}
      {/* Video bg */}
      {/* Jquery Slick , Owl-Carousel Plugins */}
      {/* One Page, Animated-HeadLin */}
      {/* Date Picker */}
      {/* Nice-select, sticky */}
      {/* Progress */}
      {/* counter , waypoint,Hover Direction */}
      {/* contact js */}
      {/* Jquery Plugins, main Jquery */}
    </>
  );
}
