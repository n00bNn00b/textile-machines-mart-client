import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

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
    if (email !== confirmEmail) {
      toast("Email does not match! Try again.");
    } else {
      await sendPasswordResetEmail(email);
      toast("Password reset link sent!");
    }
  };
  return (
    <div className="container">
      <h1 className="m-3 text-center">Reset Password</h1>
      <Form onSubmit={handleResetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
          <Form.Control type="email" placeholder="Confirm email" />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Send Password Reset Email
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPassword;
