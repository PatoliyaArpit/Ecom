import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fadd } from "./redux/Slice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "./schema/index1";

function Login1(props) {
  const navigate = useNavigate();
  const users = useSelector((state) => state.log.log);
  const dispatch = useDispatch();

  const initialValues = {
    Email: "",
    Password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: login,
      onSubmit: (values, { setSubmitting }) => {
        // Find the user with the provided email
        const user = users.find((user) => user.Email === values.Email);

        // Check if user exists and password matches
        if (user && user.Password === values.Password) {
          // Dispatch action to store user data in Redux
          dispatch(fadd({ email: values.Email, password: values.Password }));
          navigate("/");
        } else {
          // Alert user about incorrect credentials
          alert("Incorrect email or password. Please try again.");
        }

        setSubmitting(false);
      },
    });

  // const Remove = () => {
  //   window.localStorage.removeItem("email");
  //   window.localStorage.removeItem("password");
  // };

  //   const user = users.find(
  //     (user) => user.Email === email && user.Password === password
  //   );
  //   if (user) {
  //     dispetch(fadd({ email, password }));
  //     navigate("/Home");
  //   } else {
  //     alert("Please enter correct information");
  //   }
  // }

  return (
    <>
      <section className="vh-500">
        <div className="container-fluid h-custom">
          <div>
            -----------------------------------------------------------------
          </div>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in" />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    // onChange={(e) => {
                    //   setemail(e.target.value);
                    // }}
                    onChange={handleChange}
                    value={values.Email}
                    onBlur={handleBlur}
                  />
                  {errors.Email && touched.Email ? (
                    <p className="form-error">{errors.Email}</p>
                  ) : null}
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div data-mdb-input-init="" className="form-outline mb-3">
                  <input
                    type="password"
                    id="Password"
                    name="Password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    // onChange={(e) => {
                    //   setpassword(e.target.value);
                    // }}
                    onChange={handleChange}
                    value={values.Password}
                    onBlur={handleBlur}
                  />
                  {errors.Password && touched.Password ? (
                    <p className="form-error">{errors.Password}</p>
                  ) : null}
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    {/* <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3"
                      /> */}
                    {/* <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label> */}
                  </div>
                  {/* <a href="#!" className="text-body">
                      Forgot password?
                    </a> */}
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/Login" className="link-danger" >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* Copyright */}
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
    </>
  );
}
export default Login1;
