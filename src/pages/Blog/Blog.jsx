import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-5 mb-5 pb-5">
      <h2 className="pt-5 text-center">
        Difference between JavaScript and NodeJS
      </h2>
      <p>
        JavaScript is a programming language that needs to write script with
        which websites become interactive. JavaScript can run only in browsers
        which used in client side. Devopers can add HTML through JavaScript and
        it is needed to work with DOM. JavaScript can run in any brwser engine
        like V8, JS Core, Spidermonkey etc.
      </p>
    </Container>
  );
};

export default Blog;
