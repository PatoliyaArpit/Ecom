import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import emailjs from "@emailjs/browser";
function File5() {
  const [data, setdata] = useState([]);
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");
  const form = useRef();

  useEffect(() => {
    call();
  }, [data]);
  const call = () => {
    fetch("http://localhost/Edgecut.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata(res);
      });
  };
  function hand(e) {
    e.preventDefault();
    const data = {
      Name: Name,
      Contact: Contact,
      Email: Email,
      Msg: Msg,
    };
    axios({
      method: "post",
      url: "http://localhost/adg.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log("Result", res);
      alert("Record Insert Successfully");
      // navigate(`Calldata`);
      emailjs.sendForm(
        "service_ao2lijj",
        "template_ylmwlep",
        form.current,
        "ieP3hMvD2Zi_nn74n"
      );
    });
  }
  return (
    <div>
      <div>
        <div class="hero_area">
          <header class="header_section long_section px-0">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <span>Edgecut</span>
              </a>
            </nav>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav ">
                  <li class="nav-item ">
                    <a class="nav-link" href="index.html">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="furniture.html">
                      Furnitures
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
                <a href="">
                  <span>Login</span>
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <form class="form-inline">
                  <button
                    class="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </header>
        </div>
      </div>

      <section class="contact_section  long_section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="form_container">
                <div class="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form ref={form} onSubmit={hand}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="user_name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      name="contact"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      name="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      class="message-box"
                      placeholder="Message"
                      onChange={(e) => {
                        setMsg(e.target.value);
                      }}
                      name="Message"
                    />
                  </div>
                  <div class="btn_box" type="submit">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_container">
                <div class="map">
                  <div id="googleMap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.6511575557176!2d70.94095947649954!3d21.375225575374575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be29bf9a64cee73%3A0xbeb6d88293701e49!2sPatoliya%20arpit!5e0!3m2!1sen!2sin!4v1706191997584!5m2!1sen!2sin"
                      width="800"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      target="_blank"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="info_section long_section">
        <div class="container">
          <div class="contact_nav">
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +91 9316868577</span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : patoliyaarpit70@gmail.com</span>
            </a>
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Location</span>
            </a>
          </div>

          <div class="info_top ">
            <div class="row ">
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="info_links">
                  <h4>QUICK LINKS</h4>
                  <div class="info_links_menu">
                    {/* <a class="" href="index.html">Home <span class="sr-only">(current)</span></a> */}
                    <Nav.Link as={Link} to="/Home" class="nav-link">
                      Home
                    </Nav.Link>
                    {/* <a class="" href="about.html"> About</a> */}
                    <Nav.Link as={Link} to="/File2" class="nav-link">
                      About
                    </Nav.Link>
                    {/* <a class="" href="furniture.html">Furniture</a> */}
                    <Nav.Link as={Link} to="/File3" class="nav-link">
                      Furniture
                    </Nav.Link>
                    {/* <a class="" href="blog.html">Blog</a> */}
                    <Nav.Link as={Link} to="/File4" class="nav-link">
                      Blog
                    </Nav.Link>
                    {/* <a class="" href="contact.html">Contact Us</a> */}
                    <Nav.Link as={Link} to="/File5" class="nav-link">
                      Contact Us
                    </Nav.Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                <div class="info_post">
                  <h5>INSTAGRAM FEEDS</h5>
                  <div class="post_box">
                    <div class="img-box">
                      <img src="http://localhost/img/f1.png" alt="" />
                    </div>
                    <div class="img-box">
                      <img src="http://localhost/img/f2.png" alt="" />
                    </div>
                    <div class="img-box">
                      <img src="http://localhost/img/f3.png" alt="" />
                    </div>
                    <div class="img-box">
                      <img src="http://localhost/img/f4.png" alt="" />
                    </div>
                    <div class="img-box">
                      <img src="http://localhost/img/f5.png" alt="" />
                    </div>
                    <div class="img-box">
                      <img src="http://localhost/img/f6.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="info_form">
                  <h4>SIGN UP TO OUR NEWSLETTER</h4>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <div class="social_box">
                    <Nav.Link
                      as={Link}
                      to="https://www.facebook.com/"
                      target="_blank"
                      class="nav-link"
                    >
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </Nav.Link>
                    {/* <a href="https://www.facebook.com/" target="_blank">
                      <i class="fa fa-facebook" aria-hidden="true" ></i>
                    </a> */}
                    <Nav.Link
                      as={Link}
                      to="https://twitter.com/home"
                      target="_blank"
                      class="nav-link"
                    >
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </Nav.Link>
                    {/* <a href="https://twitter.com/home" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true" url=""></i>
                    </a> */}
                    <Nav.Link
                      as={Link}
                      to="https://www.linkedin.com/feed/"
                      target="_blank"
                      class="nav-link"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </Nav.Link>

                    {/* <a href="https://www.linkedin.com/feed/" target="_blank">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a> */}
                    <Nav.Link
                      as={Link}
                      to="https://www.instagram.com/"
                      target="_blank"
                      class="nav-link"
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </Nav.Link>
                    {/* <a href="https://www.instagram.com/" target="_blank">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>

      <script src="js/jquery-3.4.1.min.js"></script>

      <script src="js/bootstrap.js"></script>

      <script src="js/custom.js"></script>

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
    </div>
  );
}
export default File5;
