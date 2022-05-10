import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Loading;
