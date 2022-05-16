import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useJwtToken from "../../../hook/useJwtToken";
import Loading from "../../SharedComponents/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGitHub, loadingGitHub, errorGitHub] =
    useSignInWithGithub(auth);
  const [token] = useJwtToken(user || userGitHub);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  if (loading || loadingGitHub) {
    <Loading />;
  }
  if (error || errorGitHub) {
    toast("Something gone wrong! Please try again.");
  }

  // google sign in
  const googleSignInHandler = async () => {
    await signInWithGoogle();
  };

  // gitHub signIn
  const gitHubSignInHandler = async () => {
    await signInWithGithub();
  };
  return (
    <Container className="mb-5 pb-5">
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "#87adc9" }}
          className="w-50"
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
      <Button
        onClick={googleSignInHandler}
        style={{ backgroundColor: "rgb(70 129 104)" }}
        className="w-50 border-0 my-3"
      >
        <img
          style={{ height: "78px", width: "80px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt="google"
        />
      </Button>
      <br />
      <Button
        onClick={gitHubSignInHandler}
        style={{
          backgroundColor: "rgb(70 129 104)",
        }}
        className="w-50 border-0"
      >
        <img
          style={{ height: "78px", width: "78px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="gitHub"
        />
      </Button>
    </Container>
  );
};

export default SocialLogin;
