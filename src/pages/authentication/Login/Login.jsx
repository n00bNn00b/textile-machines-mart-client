import axios from "axios";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useJwtToken from "../../../hook/useJwtToken";
import Loading from "../../SharedComponents/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [token] = useJwtToken(user);

  // let errorMessage;
  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    <Loading />;
  }
  if (error) {
    toast("Wrong Email/Password! Please try again");
  }

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    e.target.reset();
    // console.log(password);
    await signInWithEmailAndPassword(email, password);

    //
    const { data } = await axios.post(
      "https://mysterious-badlands-44008.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
  };
  return (
    <Container className=" mt-5">
      <h1 className="my-3 text-center pt-5">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 d-block mx-auto" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group
          className="mb-3  d-block mx-auto"
          controlId="formBasicPassword"
        >
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button
          style={{ backgroundColor: "rgb(70 129 104)" }}
          className="w-25 border-0 p-2 mx-auto d-block text-white"
          type="submit"
        >
          Login
        </Button>
      </Form>

      {/* password reset div */}

      <div className="text-center p-3">
        <p>
          Do not have an account?
          <span>
            <Link
              className="px-2"
              style={{ textDecoration: "none", color: "rgb(70 129 104)" }}
              to="/register"
            >
              Register
            </Link>
          </span>
        </p>
        <p>
          Forgot Password?
          <span>
            <Link
              className="px-2"
              style={{ textDecoration: "none", color: "rgb(70 129 104)" }}
              to="/resetPassword"
            >
              Reset Password
            </Link>
          </span>
        </p>
      </div>
      {/* social login div */}

      <div className="text-center">
        <SocialLogin />
      </div>
    </Container>
  );
};

export default Login;
