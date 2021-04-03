import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { authenticateUser } from "../../actions/authActions";
import { useHistory } from 'react-router-dom';
import "./Login.css";

const Login = ({ auth, authenticateUser }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function resetLoginForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    authenticateUser(email, password);
    setTimeout(() => {
      if (auth.isLoggedIn === true) {
        history.push("/");
      }
      if (auth.isLoggedIn === false) {
        resetLoginForm();
        setError("Invalid email and password");
      }
    }, 500)
  }

  // useEffect(() => {
  //   if (auth.isLoggedIn === true) {
  //     history.push("/");
  //   }
  //   if (auth.isLoggedIn === false) {
  //     resetLoginForm();
  //     setError("Invalid email and password");
  //   }
  // }, [auth]);

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);