import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../SharedComponents/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorMessage;
  if (user) {
    navigate("/");
  }
  if (error) {
    <div className="text-danger">{(errorMessage = error.message)}</div>;
  }
  if (loading) {
    <Loading />;
  }

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;
    // console.log(password);

    await signInWithEmailAndPassword(email, password);
    navigate(from, { replace: true });
  };
  return (
    <Container>
      <h1 className="m-3 text-center">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
      {errorMessage}
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
