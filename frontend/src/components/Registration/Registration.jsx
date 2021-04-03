import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createAccount } from "../../actions/authActions";
import { connect } from "react-redux";
import "./Registration.css";

function Registration({auth, createAccount}) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && password==newPassword;
  }

  function handleSubmit(event) {
    event.preventDefault();
    createAccount(email, password, dateOfBirth)
  }

  return (
    <div className="Registration">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            autoFocus
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="newPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
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
    createAccount: (email, password, dateOfBirth) => dispatch(createAccount(email, password, dateOfBirth))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);