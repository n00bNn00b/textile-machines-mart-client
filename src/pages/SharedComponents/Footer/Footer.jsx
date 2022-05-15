import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav>
            <Nav.Link className="text-white me-2" as={Link} to="/about">
              About Us
            </Nav.Link>

            <Nav.Link className="text-white me-2" as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </h6>{" "}
      </div>
    </div>
  );
};

export default Footer;
