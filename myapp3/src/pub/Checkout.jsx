import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';

const Checkout = () => {
  const [Price, setPrice] = useState(0);
  const [Discount,setDiscount]=useState(0);
  const [subtotal,setsubtotal]=useState(0);
  const [gst,setgst]=useState(0);
  const [FinalP, setFinalP] = useState(0);


  const Show = useSelector((state) => state.Cart.Cart);
  const final = useSelector((state) => state.final.final);

  console.log(Show)

    useEffect(() => {
        
    const totalPrice = Show.reduce(
      (total, item) => total + item.Price * item.quantity,
      0
    );
    setPrice(totalPrice);
    const Discount=totalPrice*0.02;
    setDiscount(Discount)
    const Sub=totalPrice-Discount;
    setsubtotal(Sub)
    const Gst=totalPrice*0.18;
    setgst(Gst);
    const Final=totalPrice-Gst-Discount;
    setFinalP(Final)
    
     
  }, [Show]);

  // const makePayment= async()=>{
  //   const stripe=await loadStripe("pk_test_51PFvkNSF0uRd81kXkvI0KPn46KKuVWmhdcqVisa6HQ5vccNvpo4TvtuRezoLzA7UtedphYGtxfzq15nx684mYOAw005Sply1iG");
  //  const body={
  //   products:Show
  //  }
  //  const headers={
  //   "Content-Type":"application/json"
  //  }
  //   const response=await fetch("http//localhost:3000/api/create-checkout-session",{
  //     method:"POST",
  //     headers:headers,
  //     body:JSON.stringify(body)
  //   })
  //   const session=await response.json();

  //   const result=stripe.redirectToCheckout({
  //     sessionId:session.id
  //   })
   
  // }

  

  return (
    <>
      <>
        {/* Font Awesome */}
        <title>Day 002 - Credit Card Checkout</title>
        
        <div className="checkout-container">
          <div className="right-side">
            <div className="receipt">
              <h2 className="receipt-heading">Receipt Summary</h2>
              <div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Total Price</td>
                      <td className="price">{Price}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td className="price">{Discount}</td>
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td className="price">{subtotal}</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td className="price">{gst} </td>
                    </tr>
                    <tr className="total">
                      <td>Final Price</td>
                      <td className="price">{FinalP}</td>
                    </tr>
                    {/* <button type="button" className=" btn btn-success" onClick={makePayment} >Payment</button> */}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </>
    </>
  );
};
export default Checkout;
