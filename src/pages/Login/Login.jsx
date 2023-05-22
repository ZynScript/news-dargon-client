import React, {useContext, useState} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  console.log("login page location", location);
  const redirect = location?.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Account Logged Successfully");
        navigate(redirect, {replace: true});
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <Container className="w-50 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-dark">
          Dont't Have An Account? <Link to="/register">Create An Account</Link>
        </Form.Text>
      </Form>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Text className="text-success">{success}</Form.Text>
    </Container>
  );
};

export default Login;
