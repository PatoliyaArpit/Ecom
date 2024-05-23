import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { Removefadd, apishow } from "./redux/Slice";
import { useContext, createContext, Children } from "react";
import { addcart } from "./redux/Slice";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { useAuth0 } from "@auth0/auth0-react";
const Name = createContext();

function Home() {
  const [pop, setpop] = useState(false);
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");
  const final = useSelector((state) => state.final.final);
  const Cart = useSelector((state) => state.Cart.Cart);
  const dispetch = useDispatch();
  const navigate = useNavigate();

  // console.log(final);

  const Arr = [];
  useEffect(() => {
    Cart.map((item) => {
      Arr.push(item.Id);
    });
    setvalue(Arr);
  }, [Cart]);
  console.log(value);
  const call1 = () => {
    fetch("http://localhost/Mobail.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata(res);
      });
  };
  useEffect(() => {
    call1();
  }, []);
  // console.log(data);
  const logout1 = () => {
    alert("Logout Site");
    // window.localStorage.removeItem("item")
    window.localStorage.removeItem("final");
    dispetch(Removefadd());
  };
  const btn = () => {
    setpop(false);
  };
  const Login = () => {
    navigate("/Login1");
  };

  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
 
  // const { logout } = useAuth0();
  return (
    <div className="">
      <div class="hero_area">
        <header class="header_section long_section px-0" >
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="">
              <span>Edgecut</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    {/* <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> */}
                    <Nav.Link as={Link} to="/File1" class="nav-link">
                      Home
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="File2.jsx"> About</a> */}
                    <Nav.Link as={Link} to="/File2" class="nav-link">
                      User
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="furniture.html">Furnitures</a> */}
                    <Nav.Link as={Link} to="/File3" class="nav-link">
                      Crud
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="blog.html">Blog</a> */}
                    <Nav.Link as={Link} to="/File4" class="nav-link">
                      Blog
                    </Nav.Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="contact.html">Contact Us</a> */}
                    <Nav.Link as={Link} to="/File5" class="nav-link">
                      Contact Us
                    </Nav.Link>
                  </li>
                  <li style={{fontSize:"0.5rem" ,width:"20px"}}>
                 
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
              {
                  isAuthenticated &&(
                    <p style={{fontSize:"15px" ,margin:"-10% 0 0 0"}} >Hi.{user.name}</p>
                  )
                }
                <button onClick={() => setpop(!pop)}>pop</button>
                {pop ? <Popup pass={btn} /> : null}
                {/* {final.length == 0 ? (
                    <button onClick={ Login}>Login</button>
                  ) : (
                    <button onClick={logout1}>Logout</button>
                  )} */}
                {/* <i class="fa fa-user" aria-hidden="true"></i> */}
               
                {
                  isAuthenticated?<button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>:<button onClick={() => loginWithRedirect()}>Log In</button>
                }
                
                
                <form class="form-inline">
                  <button
                    class="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <Link to="/Cart">
                      <i class="fa-solid fa-cart-shopping">{Cart.length}</i>
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <section className="">
          <div className="row">
            {data.map((val) => {
              const { Id, Img, Price, Title } = val;
              return (
                <div
                  className="card"
                  key=""
                  style={{ width: "20rem", height: "28rem", margin: "5rem" }}
                >
                  <img
                    src={Img}
                    style={{
                      width: "15rem",
                      objectFit: "cover",
                      margin: "1rem",
                    }}
                    className="card-img-top-50"
                    alt={""}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Price}</p>

                    {value.includes(Id) ? (
                      <Link
                        to="/Cart"
                        className="Order"
                        onClick={() => {
                          dispetch(
                            addcart({ Id, Img, Price, Title, quantity: 1 })
                          );
                        }}
                      >
                        Go To Cart
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        className="Order"
                        onClick={() => {
                          dispetch(
                            addcart({ Id, Img, Price, Title, quantity: 1 })
                          );
                        }}
                      >
                        Add to Cart
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <footer>
        <h5> 2024 © Produce By Patoliya Arpit</h5>
      </footer>
    </div>
  );
}
export default Home;
export { Name };
