import React, { Component } from "react";
import Modal from "./Modal.js";
import TimeEditFormComponent from "./TimeEditForm.js";

class EditButton extends Component {
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
    return (
      <div className="button-container">
        <a className="button" onClick={() => this.showForm()}>
          Edit Entry
        </a>
        <Modal form={this.state.form} handleClose={this.hideForm}>
          <TimeEditFormComponent
            handleClose={this.hideForm}
            handleEntry={this.props.handleEntry}
            editData={this.props.data}
            index={this.props.index}
          />
        </Modal>
      </div>
    );
  }
}

export default EditButton;
