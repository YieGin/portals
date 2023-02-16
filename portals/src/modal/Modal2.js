import React from "react";
import ReactDOM from "react-dom";
import Image1 from "../Images/2.jpg";
import "./Modal.css";
const Modal2 = ({ show2, closeModal }) => {
  if (!show2) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={closeModal}></div>

      <div className="Center_box">
        <button onClick={closeModal}>Close</button>

        <img
          className="Image1
        "
          src={Image1}
          alt=""
        />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal2;
