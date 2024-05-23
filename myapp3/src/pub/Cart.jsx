import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatecart } from "./redux/Slice";
import { removecart } from "./redux/Slice";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
  const [price, setprice] = useState(0);

  const show = useSelector((state) => state.Cart.Cart);
  console.log(show);
  const final = useSelector((state) => state.final.final);
  useEffect(() => {
    const totalPrice = show.reduce((total,item) => total + (item.Price * item.quantity), 0);
    setprice(totalPrice);

  }, [show]);
  const dispetch = useDispatch();

  const increase = (id) => {
    const updatedCart = show.map((item) =>
      item.Id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispetch(updatecart(updatedCart));
  };
  const decrease = (id) => {
    const updatedCart = show.map((item) =>
      item.Id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispetch(updatecart(updatedCart));
  };
  const makePayment= async()=>{
    const stripe=await loadStripe("pk_test_51PFvkNSF0uRd81kXkvI0KPn46KKuVWmhdcqVisa6HQ5vccNvpo4TvtuRezoLzA7UtedphYGtxfzq15nx684mYOAw005Sply1iG");
   const body={
    products:show
   }
   const headers={
    "Content-Type":"application/json"
   }
    const response=await fetch("http://localhost:8081/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })
    const session=await response.json();

    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })

    if(result.error){
      console.log( result.error)
    }
   
  }


  return (
    <>
    {
      final.length===0?
      <h1>login</h1>:
      <div
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        className="container"
      >
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2">
              <h4>Shopping cart</h4>
            </div>
            {show.map((val) => {
              return (
                <div
                  key={val.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem 0.75rem",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    borderRadius: "0.25rem",
                  }}
                >
                  <div style={{ marginRight: "0.5rem" }}>
                    <img
                      className="rounded"
                      src={val.Img}
                      width={70}
                      alt="product"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    className="product-details"
                  >
                    <span className="font-weight-bold">{val.Title}</span>
                    {/* <div
                      style={{ display: "flex", flexDirection: "row" }}
                      className="product-desc"
                    >
                      <div style={{ marginRight: "0.5rem" }} className="size">
                        <span className="text-grey">Size:</span>
                        <span className="font-weight-bold">&nbsp;M</span>
                      </div>
                      <div className="color">
                        <span className="text-grey">Color:</span>
                        <span className="font-weight-bold">&nbsp;Grey</span>
                      </div>
                    </div> */}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    className="qty"
                  >
                    <button
                      className="fa fa-minus text-danger"
                      onClick={() => decrease(val.Id)}
                    />
                    <h5
                      style={{
                        color: "#555",
                        marginTop: "0.25rem",
                        marginRight: "0.25rem",
                        marginLeft: "0.25rem",
                      }}
                      className="text-grey"
                    >
                      {val.quantity}
                    </h5>
                    <button
                      className="fa fa-plus text-success"
                      onClick={() => increase(val.Id)}
                    />
                  </div>

                  <div>
                    <h5 style={{ color: "#555" }} className="text-grey">
                      {" "}
                      Rs:{val.Price * val.quantity}
                    </h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <a onClick={() => dispetch(removecart({ Id: val.Id }))}>
                      <i className="fa fa-trash mb-1 text-danger" />
                    </a>
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                // justifyContent:"center",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "1rem",
                padding: "0.5rem 0.75rem",
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
              }}
              className="bg-white rounded"
            >
              <lable>
                <h4>Total:{price}</h4>
              </lable>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "1rem",
                padding: "0.5rem 0.75rem",
                backgroundColor: "#fff",
                borderRadius: "0.25rem",
              }}
              className="bg-white rounded"
            >
              {/* <Link
                to="/Checkout"
                className="btn btn-warning btn-block btn-lg"
                type="button"
              >
                Checkout
              </Link> */}
              <button className="btn btn-warning btn-block btn-lg" onClick={makePayment}>
               payment
              </button>
            </div>
          </div>
        </div>
      </div>

    }
      
    </>
  );
};

export default Cart;
