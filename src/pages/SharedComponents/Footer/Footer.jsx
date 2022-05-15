import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ backgroundColor: "rgb(70, 129, 104)", height: "50px" }}
      className="fixed-bottom mt-5 pb-5 d-flex justify-content-between"
    >
      <div>
        <h5 className="ms-2 mt-2 text-white ">
          &copy; {year} | All Rights Reserved{" "}
        </h5>
      </div>
      <div className="mt-2">
        <h6>
          {" "}
          <a
            style={{ textDecoration: "none" }}
            className="text-white me-2"
            href="/about"
          >
            {" "}
            About Us
          </a>{" "}
        </h6>
      </div>
    </div>
  );
};

export default Footer;
