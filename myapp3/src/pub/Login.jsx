import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/Slice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signup } from "./schema";

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [submit, setsubmit] = useState(true);

  const dispetch = useDispatch();
  const cart = useSelector((state) => state.log.log);
  console.log(cart);
  const navigat = useNavigate();

  const initialValues = {
    Name: "",
    Email: "",
    Contact: "",
    Password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: signup,
      onSubmit: (values, { setsubmit }) => {
        if (!cart.length == 1) {
          dispetch(add(values));
          navigat("/");
          setsubmit(true);
        } else {
          alert("allredy register");
        }
      },
    });
  console.log(errors);

  const newregister = () => {
    window.localStorage.removeItem("log");
  };

  return (
    <>
      {/* <section
        className="vh-100 bg-image"
        // style={{
        //   backgroundImage:
        //     'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        // }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="text"
                          id="Name"
                          name="Name"
                          className="form-control form-control-lg"
                          //   onChange={(e) => {
                          //     setname(e.target.value);
                          //   }}
                          onChange={handleChange}
                          value={values.Name}
                          onBlur={handleBlur}
                        />
                        {errors.Name && touched.Name ? (
                          <p className="form-error">{errors.Name}</p>
                        ) : null}
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="email"
                          id="Email"
                          name="Email"
                          className="form-control form-control-lg"
                          //   onChange={(e) => {
                          //     setemail(e.target.value);
                          //   }}
                          onChange={handleChange}
                          value={values.Email}
                          onBlur={handleBlur}
                        />
                        {errors.Email && touched.Email ? (
                          <p className="form-error">{errors.Email}</p>
                        ) : null}
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="Contact"
                          id="Contact"
                          name="Contact"
                          className="form-control form-control-lg"
                          //   onChange={(e) => {
                          //     setcontact(e.target.value);
                          //   }}
                          onChange={handleChange}
                          value={values.Contact}
                          onBlur={handleBlur}
                        />
                        {errors.Contact && touched.Contact ? (
                          <p className="form-error">{errors.Contact}</p>
                        ) : null}
                        <label className="form-label" htmlFor="form3Example4cg">
                          Contact
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="password"
                          id="Password"
                          name="Password"
                          className="form-control form-control-lg"
                          //   onChange={(e) => {
                          //     setpassword(e.target.value);
                          //   }}
                          onChange={handleChange}
                          value={values.Password}
                          onBlur={handleBlur}
                        />
                        {errors.Password && touched.Password ? (
                          <p className="form-error">{errors.Password}</p>
                        ) : null}
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          href="/Login1"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/Login1" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                        <button onClick={newregister}>new register</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="mainreg">
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Registration Form</h2>
            </div>
            <div className="row clearfix">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    value={values.Name}
                    handleBlur={handleBlur}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.Email}
                    handleBlur={handleBlur}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    name="Contact"
                    placeholder=" Contact"
                    onChange={handleChange}
                    value={values.Contact}
                    handleBlur={handleBlur}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="Password"
                    placeholder=" Password"
                    onChange={handleChange}
                    value={values.Password}
                    handleBlur={handleBlur}
                  />
                </div>

                <input className="button" type="submit" />
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <Link to="/Login1" className="fw-bold text-body">
                    <u>Login here</u>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
