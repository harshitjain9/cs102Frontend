import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { forgotPassword } from "../../actions/authActions";
import { connect } from "react-redux";
import "./forgotPassword.css";

function ForgotPassword({auth, forgotPassword}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && password==newPassword && dateOfBirth!="";
  }

  function handleSubmit(event) {
    event.preventDefault();
    forgotPassword(email, password, dateOfBirth);
  }

  return (
    <div className="forgotPassword container">
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
        <Form.Group size="lg" controlId="email">
          <Form.Label>Date Of Birth</Form.Label>
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
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Reset
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
    forgotPassword: (email, password, dateOfBirth) => dispatch(forgotPassword(email, password, dateOfBirth))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);