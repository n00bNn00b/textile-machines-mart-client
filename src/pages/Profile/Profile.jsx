import React from "react";
import { Card, Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  //   console.log(user.displayName);
  let avatar = "https://cdn-icons-png.flaticon.com/512/147/147140.png";
  if (user?.photoURL) {
    avatar = user?.photoURL;
  }

  return (
    <Container className="mt-5 w-50 text-center mb-5 pb-5">
      <h2 className="text-center py-5">Profile</h2>
      <Card className=" d-block mx-auto" style={{ width: "30rem" }}>
        <Card.Img className="d-block mx-auto p-5" variant="top" src={avatar} />
        <Card.Body className="mt-3">
          <Card.Title>Profile Name: {user?.displayName}</Card.Title>
          <Card.Title>Email: {user?.email}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
