import React from 'react'

const Popup = (props) => {
  return (
    <>
    <div className="modal-wrapper">
    
    <div className="model-container">
    <button className="close"onClick={props.pass} > X</button>
      <h2> hello</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        cupiditate.
      </p>
      <button className="model-btn" onClick={props.pass}>
        Accept
      </button>
    </div>
    </div>
    </>
  )
}
export default Popup