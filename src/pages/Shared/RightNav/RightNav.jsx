import React from "react";
import {Button, ListGroup} from "react-bootstrap";
import {FaFacebook, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "/assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-dark">
        <FaGithub />
        Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item disabled>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img className="w-100" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
