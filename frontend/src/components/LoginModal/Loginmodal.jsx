import React, { Component } from "react";
import LoginModal from './fmlModal.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <h1>Create a New Account</h1>
        <LoginModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </LoginModal>
      </main>
    );
  }
}

export default Dashboard;