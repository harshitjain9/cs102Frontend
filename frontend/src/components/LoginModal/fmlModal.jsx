import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from "../../actions/errorActions";
import { Link } from "react-router-dom";

const LoginModal = ({
  isAuthenticated,
  error,
  login,
  clearErrors,
  
}) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [DOB, setDOB] = useState('');
  const [userName, setUserName] = useState('');
  const [msg, setMsg] = useState(null);
//   const [type, setType] = useState('INDIVIDUAL');
  

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeDOB = (e) => setDOB(e.target.value);
  const handleChangeUserName = (e) => setUserName(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = { email, password, userName, DOB };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);

  return (
    <div>
      {/* <a className="btn btn-sm sign-up-button" href="#" onClick={handleToggle}>Register </a> */}
      <button type="button-progress" onClick={handleToggle}>
          Register
          </button>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>New User</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="User Name"
                className="mb-3"
                onChange={handleChangeUserName}
              />
              <Label for="dob">Date of Birth</Label>
              <Input
                type="date"
                name="DOB"
                id="DOB"
                placeholder="Date of Birth"
                className="mb-3"
                onChange={handleChangeDOB}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={handleChangeEmail}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleChangePassword}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleOnSubmit}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);