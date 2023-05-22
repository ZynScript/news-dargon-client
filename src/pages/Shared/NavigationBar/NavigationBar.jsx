import {Button, Container} from "react-bootstrap";
import {FaUserCircle} from "react-icons/fa";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {AuthContext} from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => alert(err.message));
  };

  return (
    <Container className="mb-5">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5 ">
              <Link className="text-dark me-3 text-decoration-none" to="/">
                Home
              </Link>

              <Link
                className="text-dark me-3 text-decoration-none"
                href="#pricing">
                About
              </Link>
              <Link
                className="text-dark me-3 text-decoration-none"
                href="#pricing">
                Career
              </Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle className="fs-1 me-2" />}

              {user ? (
                <Button onClick={handleLogOut} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
