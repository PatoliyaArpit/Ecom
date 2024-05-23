import React, { useEffect } from "react";
import { Await, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apishow } from "./redux/Slice";

function File2() {
  const [data, setdata] = useState([]);
  // const [loading,setloading]=useState(true);
  const dispetch = useDispatch();
  const all = useSelector((state) => state.api.api);
  const check =useSelector((state)=>state.log.log);
  const user1=useSelector((state)=>state.final.final)
  console.log(check)
  

  async function fetchdata() {
    
    const res = await fetch("http://localhost/TaskShow.php");
    const result = await res.json();
    dispetch(apishow(result));
    console.log(all);
    
  }
  console.log(data);

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    setdata(all);
  }, [all]);

  //   console.log(data);
  return (
    <div>
      <div className="table-responsive ">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Desig</th>
              {/* <th>recoverd</th>
              <th> deaths</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {

              // console.log(val);
              // console.log(val)
              
              return (
                <tr>
                  <td>{val.Id}</td>
                  <td>{val.Name}</td>
                  <td>{val.Desig}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
export default File2;
