import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      {children}
    </div>
  );
};

export default Modal;
