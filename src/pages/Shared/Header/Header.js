import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import userImg from "../../../images/user.png"
const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand to="/home#home">
            <img
              src="/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{" "}
            BD Travelers
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#offers">
              Offers
            </Nav.Link>
            <Nav.Link as={HashLink} to="/manageOffer">
              Manage Offer
            </Nav.Link>
            <Nav.Link as={HashLink} to="/addOffer">
              Add Offer
            </Nav.Link>
            <Nav.Link as={HashLink} to="/dashboard">
              DashBoard
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#volunteers">
              Volunteers
            </Nav.Link>
            {user?.email || user?.displayName ? (
              <Button className="me-2" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                className=" text-success fw-bold rounded-3 me-2"
                to="/signup"
              >
                SignUp
              </Nav.Link>
            )}
            <Navbar.Brand>
              <img
                src={user.photoURL?user.photoURL:userImg}
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle"
                alt={user}
              />{" "}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
