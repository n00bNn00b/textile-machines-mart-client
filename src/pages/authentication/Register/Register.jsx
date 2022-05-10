import React from "react";
import { Button, Form } from "react-bootstrap";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (loading || updating) {
    return <p>Loading....</p>;
  }

  if (user) {
    navigate("/");
  }
  // register form function

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.formBasicText.value;
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    const confirmPassword = e.target.formConfirmPassword.value;
    // console.log(name, email, password);
    if (password !== confirmPassword) {
      toast("Password Does not Match!");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast("Profile has been created!");
    }
  };

  return (
    <div className="container">
      <h1 className="m-3 text-center">Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-left"
            type="checkbox"
            label="Agree with terms and condition?"
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: "rgb(70 129 104)" }}
          className="d-block mx-auto w-25 text-white"
          type="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
