import React, {useContext, useState} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [accepted, setAccepted] = useState(false);
  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const logged = result.user;
        console.log(logged);
        setSuccess("Account Has Created Successfully");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-50 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name Address</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Enter Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">Accept Term and Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-dark">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Text className="text-success">{success}</Form.Text>
    </Container>
  );
};

export default Register;
