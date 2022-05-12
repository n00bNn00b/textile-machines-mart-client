import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Textile Machines' Mart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#featured">
              Featured Items
            </Nav.Link>
            <Nav.Link as={Link} to="/full">
              Full Item List
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/manageInventory">
                Manage Inventory
              </Nav.Link>
            )}
            {user && (
              <Nav.Link as={Link} to="/addItem">
                Add Item
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {user && (
              <NavDropdown title="Personal Section" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/myItems">
                  My Added Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Change Email</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {user ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
