import React from "react";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 2,
};

const outterStyles = {};

function Modal({ open, onClose }) {
  return open ? (
    <div style={modalStyles}>
      <button onClick={onClose}>Close</button>
    </div>
  ) : null;
}

export default Modal;
