import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <div className="pt-5">
        <img
          className="d-block mx-auto"
          src="https://i.ibb.co/3fvkmps/404.webp"
          alt="not found"
        />
        <p>
          <h1 className="text-center">The Requested Content Was not Found!</h1>
        </p>
      </div>
      <Button
        style={{ backgroundColor: "rgb(70 129 104)" }}
        className="d-block mx-auto w-25 border-0"
        as={Link}
        to="/home"
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFound;
