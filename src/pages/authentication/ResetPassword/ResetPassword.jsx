import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  if (error) {
    toast("User not found!");
  }
  if (sending) {
    toast("Sending password reset link...");
  }
  // password reset function
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const confirmEmail = e.target.formBasicConfirmEmail.value;
    e.target.reset();
    if (email !== confirmEmail) {
      toast("Email does not match! Try again.");
    } else {
      await sendPasswordResetEmail(email);
      toast("Password reset link sent!");
      navigate("/login");
    }
  };
  return (
    <div className="container w-50 mt-5">
      <h1 className="m-3 text-center pt-5">Reset Password</h1>
      <Form onSubmit={handleResetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
          <Form.Control type="email" placeholder="Confirm email" required />
        </Form.Group>

        <div className="text-center">
          <Button
            className="border-0 my-3"
            style={{ backgroundColor: "rgb(70 129 104)" }}
            type="submit"
          >
            Send Password Reset Email
          </Button>
          <p>
            <Button
              className="border-0"
              style={{ backgroundColor: "rgb(70 129 104)" }}
              as={Link}
              to="/"
            >
              Go Home
            </Button>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
