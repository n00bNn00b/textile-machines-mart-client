import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ backgroundColor: "rgb(70, 129, 104)", height: "70px" }}
      className=" row mt-auto pb-5 d-flex justify-content-between min-vh-100"
    >
      <div className="col-md-6 col-sm-12">
        <h6 className="ms-2 mt-2 text-white ">
          <small>&copy; {year} | All Rights Reserved </small>
        </h6>
      </div>
      <div className="mt-2 col-md-6 col-sm-12">
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
    </footer>
  );
};

export default Footer;
