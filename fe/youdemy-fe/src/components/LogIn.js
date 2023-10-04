import React from "react";
import "../css/login.css";

export default function LogIn() {
  return (
    <>
      <div>
        <div className="overlay-login">
          {/* LOGN IN FORM by Omar Dsoky */}
          <form className="form-login">
            {/*   con = Container  for items in the form*/}
            <div className="con">
              {/*     Start  header Content  */}
              <header className=" header-login">
                <h2>Log In</h2>
                {/*     A welcome message or an explanation of the login form */}
                <p>login here using your username and password</p>
              </header>
              {/*     End  header Content  */}
              <br />
              <div className="field-set">
                {/*   user name */}
                <span className="input-item">
                  <i className="fa fa-user-circle" />
                </span>
                {/*   user name Input*/}
                <input
                  className="form-input"
                  id="txt-input"
                  type="text"
                  placeholder="@UserName"
                  required=""
                />
                <br />
                {/*   Password */}
                <span className="input-item">
                  <i className="fa fa-key" />
                </span>
                {/*   Password Input*/}
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  id="pwd"
                  name="password"
                  required=""
                />
                {/*      Show/hide password  */}
                <span>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    type="button"
                    id="eye"
                  />
                </span>
                <br />
                {/*        buttons */}
                {/*      button LogIn */}
                <button className="button-login"> Log In </button>
              </div>
              {/*   other buttons */}
              <div className="other">
                {/*      Forgot Password button*/}
                <button className="btn submits frgt-pass button-login">
                  Forgot Password
                </button>
                {/*     Sign Up button */}
                <button className="btn submits sign-up button-login">
                  Sign Up
                  {/*         Sign Up font icon */}
                  <i className="fa fa-user-plus" aria-hidden="true" />
                </button>
                {/*      End Other the Division */}
              </div>
              {/*   End Conrainer  */}
            </div>
            {/* End Form */}
          </form>
        </div>
      </div>
    </>
  );
}
