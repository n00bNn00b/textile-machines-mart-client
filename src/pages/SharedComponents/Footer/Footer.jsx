import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ backgroundColor: "rgb(70, 129, 104)", height: "50px" }}
      className="fixed-bottom mt-5 pb-5"
    >
      <h6 className="text-center mt-2 text-white">
        &copy; {year} | All Rights Reserved{" "}
      </h6>
    </div>
  );
};

export default Footer;
