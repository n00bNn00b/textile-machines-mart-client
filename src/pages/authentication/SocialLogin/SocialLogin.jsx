import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "#87adc9" }}
          className=" w-50"
        ></div>
        <p className="mt-2 px-3" style={{ color: "rgb(70 129 104)" }}>
          {" "}
          Or{" "}
        </p>
        <div
          style={{ height: "1px", backgroundColor: "#87adc9" }}
          className=" w-50"
        ></div>
      </div>
      <h2>Login With</h2>
    </div>
  );
};

export default SocialLogin;
