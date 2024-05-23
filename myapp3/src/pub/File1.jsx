import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import emailjs from '@emailjs/browser';


function File1() {
  const [data, setdata] = useState([]);
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");
  const form = useRef();

  useEffect(() => {
    call();
  }, [data])
  const call = () => {
    fetch("http://localhost/Edg.php").then((result) => {
      return result.json()
    }).then((res) => {
      setdata(res);
    });
  }
  function hand(e) {
    e.preventDefault();
    const data = {
      Name: Name,
      Contact: Contact,
      Email: Email,
      Msg: Msg
    }
    axios({
      method: "post",
      url: "http://localhost/adg.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(res => {
      console.log("Result", res);
      alert("Record Insert Successfully");
      // navigate(`Calldata`);
      emailjs.sendForm('service_ao2lijj', 'template_ylmwlep', form.current, 'ieP3hMvD2Zi_nn74n');

    })
  }
  return (
    <div>
      <div class="hero_area">

        <header class="header_section long_section px-0">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>
                Edgecut
              </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    {/* <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> */}
                    <Nav.Link as={Link} to="/Home" class="nav-link" >Home</Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="File2.jsx"> About</a> */}
                    <Nav.Link as={Link} to="/File2" class="nav-link" >About</Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="furniture.html">Furnitures</a> */}
                    <Nav.Link as={Link} to="/File3" class="nav-link" >Furnitures</Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="blog.html">Blog</a> */}
                    <Nav.Link as={Link} to="/File4" class="nav-link" >Blog</Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="contact.html">Contact Us</a> */}
                    <Nav.Link as={Link} to="/File5" class="nav-link" >Contact Us</Nav.Link>
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
                <a href="">
                  <span>
                    Login
                  </span>
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <form class="form-inline">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>

        <section class="slider_section long_section">
          <div id="customCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                        </p>

                        <div class="btn-box">
                          {/* <Nav.Link as={Link} to="/File5" class="btn1">Contact Us</Nav.Link> */}
                          <a href="/File5" class="btn1">
                            Contact Us
                          </a>
                          <a href="/File2" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="http://localhost/img/about.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Contact
                          </a>
                          {/* <Nav.Link as={Link} to="/File5" class="btn1">Contact Us</Nav.Link> */}
                          <a href="" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                        </p>
                        <div class="btn-box">
                          <a href="" class="btn1">
                            Contact
                          </a>
                          <a href="" class="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#customCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#customCarousel" data-slide-to="1"></li>
              <li data-target="#customCarousel" data-slide-to="2"></li>
            </ol>
          </div>
        </section>

      </div>



      <section class="furniture_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              Our Furniture
            </h2>
            <p>
              which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>
          <div class="row">

            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f1.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    brown Chair Desogn
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 2000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.ikea.com/in/en/p/ekenaeset-armchair-kilanda-light-beige-70533491/?utm_source=google&utm_medium=surfaces&utm_campaign=shopping_feed&utm_content=free_google_shopping_clicks_Livingroomseating&gad_source=1&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RhfoKncASAyeFvX6Tz8KpFdLKM1Bn_uuY-E0KTYA9gVbbh-5BpnKVIaAjRnEALw_wcB" class="nav-link" target="_blank">  Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f2.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Double Bed Design
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 30000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.wakefit.co/bed/engineered-wood-bed-with-storage-taurus/WEWB7860STAURUSR2?cid=Cj0KCQiAqsitBhDlARIsAGMR1RjWsH2FevRVhG8Dvkioa5hPjRsxwtsY5x-iIsN2ooVXTZax__U9X54aAoFhEALw_wcB&gad_source=1&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RjWsH2FevRVhG8Dvkioa5hPjRsxwtsY5x-iIsN2ooVXTZax__U9X54aAoFhEALw_wcB&kw=&pl=&s_p=&utm_adgroup=&utm_campaign=19032926568&utm_medium=cpc&utm_source=Google" class="nav-link" target="_blank">Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f3.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    House Chair Design
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 5000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.ikea.com/in/en/p/strandmon-wing-chair-beige-80492310/?utm_source=google&utm_medium=surfaces&utm_campaign=shopping_feed&utm_content=free_google_shopping_clicks_Livingroomseating&gad_source=1&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RgN9wE43Y_Uu8Xst-CklpnW_ROYJcHjl7-i-5W8sJKqa5qfm5jvcOQaAslJEALw_wcB" class="nav-link" target="_blank">Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f4.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    brown Table Design
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 6000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.ikea.com/in/en/p/malm-desk-brown-stained-ash-veneer-20361147/?utm_source=google&utm_medium=surfaces&utm_campaign=shopping_feed&utm_content=free_google_shopping_clicks_Workspaces&gad_source=4&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RgolOi3WVzt4Er4P7ZdTJEYN8ZPwyYItwTvq_sw_iUmNae_2Ys4yCQaAsJcEALw_wcB" class="nav-link" target="_blank"> Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f5.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Blue Chair Design
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 3000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.westelm.in/8623805? source=google&medium=cpc&campaign=sok_pmax_na_allfurniture_maxconversionvalue_300922&keyword=&device=c&gad_source=4&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RiZqQnsb4L1psgWiGXfblulDxT4HGy0ugIIEsHWuk3bNO22QPHE7bcaApuJEALw_wcB" class="nav-link" target="_blank">Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/f6.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Brown Table Design
                  </h5>
                  <div class="price_box">
                    <h6 class="price_heading">
                      <span>$</span> 1000.00
                    </h6>
                    <Nav.Link as={Link} to="https://www.ikea.com/in/en/p/malm-desk-brown-stained-ash-veneer-20361147/?utm_source=google&utm_medium=surfaces&utm_campaign=shopping_feed&utm_content=free_google_shopping_clicks_Workspaces&gad_source=4&gclid=CjwKCAiAzc2tBhA6EiwArv-i6U0zazguPOpWizSGW07zr-kDLvHbAzu-02gSRbGFg228FOn8l_-ZvBoCaqMQAvD_BwE" class="nav-link" target="_blank">Buy Now</Nav.Link>
                    {/* <a href="">
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section class="about_section layout_padding long_section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="img-box">
                <img src="http://localhost/img/about.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="blog_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              Latest Blog
            </h2>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/b1.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Look even slightly believable. If you are
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/b2.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Anything embarrassing hidden in the middle
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mx-auto">
              <div class="box">
                <div class="img-box">
                  <img src="http://localhost/img/b3.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Molestias magni natus dolores odio commodi. Quaerat!
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="client_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container">
            <h2>
              Testimonial
            </h2>
          </div>
          <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" >
              <div class="carousel-item active" style={{ display: 'flex' }}>
                {
                  data.map((val) => {
                    return <div class="row" >
                      <div class="col-md-11 col-lg-10 mx-auto">
                        <div class="box">
                          <div class="img-box">
                            <img src={val.Img} alt="" />
                          </div>
                          <div class="detail-box">
                            <div class="name">
                              <i class="fa fa-quote-left" aria-hidden="true"></i>
                              <h6>
                                Meera
                              </h6>
                            </div>
                            <p>
                              It is a long established fact that a reader will be
                              distracted by the readable cIt is a long established fact
                              that a reader will be distracted by the readable c
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  })
                }
              </div>
            </div>
            <div class="carousel_btn-container">
              <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section class="contact_section  long_section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="form_container">
                <div class="heading_container">
                  <h2>
                    Contact Us
                  </h2>
                </div>
                <form ref={form} onSubmit={hand}>
                  <div>
                    <input type="text" placeholder="Your Name" onChange={(e) => { setName(e.target.value) }} name="user_name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" onChange={(e) => { setContact(e.target.value) }} name="contact" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} name="Email" />
                  </div>
                  <div>
                    <input type="text" class="message-box" placeholder="Message" onChange={(e) => { setMsg(e.target.value) }} name="Message" />
                  </div>
                  <div class="btn_box" type="submit">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_container">
                <div class="map">
                  <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.6511575557176!2d70.94095947649954!3d21.375225575374575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be29bf9a64cee73%3A0xbeb6d88293701e49!2sPatoliya%20arpit!5e0!3m2!1sen!2sin!4v1706191997584!5m2!1sen!2sin" width="800" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target="_blank"></iframe>
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
              <span>
                Call : +91 9316868577
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : patoliyaarpit70@gmail.com
              </span>
            </a>
            <a href="https://www.google.com/maps/place//@21.3752256,70.9409595,18.29z?authuser=0&entry=ttu" target="_blank">

              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
          <div class="info_top ">
            <div class="row ">
              <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="info_links">
                  <h4>
                    QUICK LINKS
                  </h4>
                  <div class="info_links_menu">
                    {/* <a class="" href="index.html">Home <span class="sr-only">(current)</span></a> */}
                    <Nav.Link as={Link} to="/Home" class="nav-link" target="_blank">Home</Nav.Link>
                    {/* <a class="" href="about.html"> About</a> */}
                    <Nav.Link as={Link} to="/File2" class="nav-link" target="_blank">About</Nav.Link>
                    {/* <a class="" href="furniture.html">Furniture</a> */}
                    <Nav.Link as={Link} to="/File3" class="nav-link" target="_blank">Furniture</Nav.Link>
                    {/* <a class="" href="blog.html">Blog</a> */}
                    <Nav.Link as={Link} to="/File4" class="nav-link" target="_blank">Blog</Nav.Link>
                    {/* <a class="" href="contact.html">Contact Us</a> */}
                    <Nav.Link as={Link} to="/File5" class="nav-link" target="_blank">Contact Us</Nav.Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                <div class="info_post">
                  <h5>
                    INSTAGRAM FEEDS
                  </h5>
                  <div class="post_box">

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
              </div>
              <div class="col-md-4">
                <div class="info_form">
                  <h4>
                    SIGN UP TO OUR NEWSLETTER
                  </h4>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">
                      Subscribe
                    </button>
                  </form>
                  <div class="social_box">
                    <Nav.Link as={Link} to="https://www.facebook.com/" target="_blank" class="nav-link">
                      <i class="fa fa-facebook" aria-hidden="true" ></i>
                    </Nav.Link>
                    {/* <a href="https://www.facebook.com/" target="_blank">
                      <i class="fa fa-facebook" aria-hidden="true" ></i>
                    </a> */}
                    <Nav.Link as={Link} to="https://twitter.com/home" target="_blank" class="nav-link">
                      <i class="fa fa-twitter" aria-hidden="true" ></i>
                    </Nav.Link>
                    {/* <a href="https://twitter.com/home" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true" url=""></i>
                    </a> */}
                    <Nav.Link as={Link} to="https://www.linkedin.com/feed/" target="_blank" class="nav-link">
                      <i class="fa fa-linkedin" aria-hidden="true" ></i>
                    </Nav.Link>

                    {/* <a href="https://www.linkedin.com/feed/" target="_blank">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a> */}
                    <Nav.Link as={Link} to="https://www.instagram.com/" target="_blank" class="nav-link">
                      <i class="fa fa-instagram" aria-hidden="true" ></i>
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
            <a href="https://html.design/">Design by Arpit</a>
          </p>
        </div>
      </footer>

      <script src="js/jquery-3.4.1.min.js"></script>

      <script src="js/bootstrap.js"></script>

      <script src="js/custom.js"></script>

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
    </div >
  )
}
export default File1;
