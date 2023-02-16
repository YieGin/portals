import React from "react";
import ReactDOM from "react-dom";
import Image1 from "../Images/1.jpg";
import "./Modal.css";
const Modal = ({ show, closeModal }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="Center_box">
        <img
          className="Image1
        "
          src={Image1}
          alt=""
        />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
