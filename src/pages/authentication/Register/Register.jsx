import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../SharedComponents/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    navigate("/");
  }
  if (error || errorProfile) {
    toast(error.message || errorProfile.message);
  }
  // register form function

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.formBasicText.value;
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    const confirmPassword = e.target.formConfirmPassword.value;
    e.target.reset();
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
    <Container className="mt-5">
      <h1 className="m-3 text-center mt-5 pt-5">Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ color: "rgb(70 129 104)" }}
            onClick={() => setAgree(!agree)}
            className={`"text-left" ${agree ? "" : "text-danger"}`}
            type="checkbox"
            label="Agree with terms and condition?"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          style={{ backgroundColor: "rgb(70 129 104)" }}
          className="w-25 border-0 p-2 mx-auto d-block text-white"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <div className="text-center py-3">
        <p>
          Already an account?
          <span>
            <Link
              className="px-2"
              style={{ textDecoration: "none", color: "rgb(70 129 104)" }}
              to="/login"
            >
              Login
            </Link>
          </span>
        </p>
        <SocialLogin />
      </div>
    </Container>
  );
};

export default Register;
