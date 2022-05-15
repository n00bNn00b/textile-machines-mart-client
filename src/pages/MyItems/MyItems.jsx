import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  // console.log(user);
  const [userItems, setUserItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/addedByUser?email=${email}`;
    axios.get(url).then((res) => setUserItems(res?.data));
  }, [userItems]);

  return (
    <Container className="mt-5 mb-5 pb-5">
      <h2 className="text-center pt-5">My Items</h2>
      {userItems.map((userItem) => (
        <MyItem key={userItem._id} userItem={userItem} />
      ))}
    </Container>
  );
};

export default MyItems;
