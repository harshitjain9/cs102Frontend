import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./WebServicesSettings.css";

function WebServicesSettings() {
 function validateValues() {
    //need to work on this part
    return true;
 }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="apiKey">
          <Form.Label>API Key</Form.Label>
          <Form.Control type="varchar" />
        </Form.Group>

        <Form.Group controlId="hours">
          <Form.Label>Hours</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
        <Form.Group controlId="minutes">
        <Form.Label>Minutes</Form.Label>
          <Form.Control type="number" label/>
        </Form.Group>
        <Form.Group controlId="minutes">
        <Form.Label>Retrieval Time</Form.Label>
          <Form.Control type="number" label/>
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default WebServicesSettings;







