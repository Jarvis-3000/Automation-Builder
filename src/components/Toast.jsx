import React, { useEffect } from "react";
import Success from "../assets/icons/success.svg";

function Toast({ title, message, onClose }) {
  // Automatically close the toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="flex flex-col gap-4 fixed top-[100px] left-1/2 transform -translate-x-1/2 z-50 bg-green-100 rounded-lg py-3 px-4 ">
      <div class="min-w-[150px] flex gap-4 flex-shrink-0">
        <img src={Success} alt="success parse" />
        <b>{title}</b>
      </div>
      <div>{message}</div>
    </div>
  );
}

export default Toast;
