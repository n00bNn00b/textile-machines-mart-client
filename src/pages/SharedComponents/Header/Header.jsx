import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Textile Machines' Mart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/home#featured">
            Featured Items
          </Nav.Link>
          <Nav.Link as={Link} to="/inventory">
            Inventory
          </Nav.Link>
        </Nav>
        {user ? (
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
