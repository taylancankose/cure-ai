import React from "react";

function CustomButton({ btnType, title, handleClick, styles }) {
  return (
    <button
      type={btnType}
      className={`rounded-lg px-6 font-epilogue text-[16px] font-semibold leading-[26px] text-white ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
