import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudshow, remove, update } from "./redux/Slice";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

function File3() {
  const [data, setdata] = useState("");
  const [item, setitem] = useState([]); 
  const [toggle, settoggle] = useState(true);
  const [Eitem, setEitem] = useState(null);
  const [counter, setCounter] = useState(1);
  const dispetch = useDispatch();
  const show = useSelector((state) => state.crud.crud);


  const handal = (e) => {
    setdata(e.target.value);
  };

  const add = () => {
    if (!data) {
      return;
    }
    const newItem = { id: counter, name: data };
    setitem([...item, newItem]);
    dispetch(crudshow(newItem));
    setdata("");
    setCounter(counter + 1);
    };

  const edit = (id) => {
    const edititem = show.find((elem) => elem.id === id);
    settoggle(false);
    setEitem(id);
    setdata(edititem.name);
  };

  const saveEdit = () => {
    if (!data) {
      return;
    }
    dispetch(update({ id: Eitem, newData: { name: data } }));
    settoggle(true);
    setdata("");
    setEitem(null);
  };

  const drop = (id) => {
    dispetch(remove(id));
    setitem(item.filter((elem) => elem.id !== id));
    setdata("");
  };
  const doc = new jsPDF();

  const generatePDF = () => {
    doc.autoTable({ html: "#datatable" });
    doc.save("table.pdf");
  };

  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>
          <CSVLink className="Excel" data={show} filename="Excel Sheet">
            Export All Data in Excel
          </CSVLink>
          <button className="pdf" onClick={generatePDF}>
            Pdf Genret
          </button>
          <div className="additem">
            {toggle ? (
              <input
                type="text"
                placeholder="Enter name"
                value={data}
                onChange={handal}
              />
            ) : (
              <input
                type="text"
                placeholder="Enter name"
                value={data}
                onChange={handal}
                autoFocus
              />
            )}
            {toggle ? (
              <button className=" " onClick={add}>
                +
              </button>
            ) : (
              <>
                <button onClick={saveEdit}>Save</button>
              </>
            )}
          </div>

          <div className=" show">
            <div className="table-responsive ">
              <table className="table table-hover" id="datatable">
                <thead className="thead-dark">
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {show.map((val, index) => {
                    return (
                      <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>
                          <button
                            className="fas fa-pencil-alt edit-btn"
                            onClick={() => edit(val.id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            title=" Delete item"
                            onClick={() => drop(val.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="showitems"></div>
        </div>
      </div>

      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
      <script src="js/custom.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
    </div>
  );
}
export default File3;
