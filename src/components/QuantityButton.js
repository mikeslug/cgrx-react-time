import React, { Component } from "react";
import QuantityFormComponent from "./QuantityForm.js";
import Modal from "./Modal.js";

class QuantityButton extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm = () => {
    this.setState({ form: true });
  };

  hideForm = () => {
    this.setState({ form: false });
  };

  render() {
    const { form } = this.state;
    return (
      <div className="button-container">
        <a className="button" onClick={() => this.showForm()}>
          Claim Quantities
        </a>
        <Modal form={this.state.form} handleClose={this.hideForm}>
          <QuantityFormComponent />
        </Modal>
      </div>
    );
  }
}

export default QuantityButton;
