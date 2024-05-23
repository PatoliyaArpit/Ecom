import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom'

import File1 from './pub/File1';
import File2 from './pub/File2';
import File3 from './pub/File3';
import File4 from './pub/File4';
import File5 from './pub/File5';
import Home from './pub/Home';
import Login from './pub/Login';
import store from './pub/redux/Store';
import { Provider } from 'react-redux';
import Login1 from './pub/Login1';
import Userinfo from './pub/Userinfo';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { signup } from './pub/schema';
import Cart from './pub/Cart';
import Checkout from './pub/Checkout';
import Sucess from './pub/Sucess';
import Cancel from './pub/Cancel';

function App() {
  const check =useSelector((state)=>state.log.log);
  const user1=useSelector((state)=>state.final.final)
  console.log(check)
  console.log(user1)
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* {
          
          user1.length==0||user1===undefined?<Route path='/' element={<Login1></Login1>}></Route>: <Route path='/' element={<Home></Home>}></Route>
        } 
        {
          user1.length==0||user1===undefined?<Route path='/Login' element={<Login></Login>}></Route>:<Route path='/Login' element={<Home></Home>}></Route>
        } 
        {
          user1.length==0?<Route path='/Login' element={<Login></Login>}></Route>:<Route path='/Login' element={<Home></Home>}></Route>
        }

       {
        user1==null? <Route path='File2' element={<Login1></Login1>}></Route>:<Route path='File2' element={<File2></File2>}></Route>
       }
       
       
       
        
         {
          user1.length==0||user1===undefined?<Route path='/Login1' element={<Login1 />} />:<Route path='/Login1' element={<Home></Home>}></Route>
         }
       {
        user1.length==0? <Route path='Userinfo' element={<Login1></Login1>}></Route>:<Route path='Userinfo' element={<Userinfo></Userinfo>}></Route>
       } */}

        {/* <Route path='Userinfo' element={<Userinfo></Userinfo>}></Route> */}

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='File2' element={<File2></File2>}></Route>
        <Route path='File3' element={<File3></File3>} ></Route>
        <Route path='File4' element={<File4></File4>}></Route>
        <Route path='File5' element={<File5></File5>}></Route>
        <Route path='Cart'  element={<Cart></Cart>}></Route>
        <Route path='Checkout'  element={<Checkout></Checkout>}></Route>
        <Route path='success'  element={<Sucess></Sucess>}></Route>
        <Route path='cancel'  element={<Cancel></Cancel>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
