import React from "react";

//resuable custom button
const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-primary btn-lg btn-block mb-5" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
