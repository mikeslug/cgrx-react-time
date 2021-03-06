import React, { Component } from "react";
import Modal from "./Modal.js";
import TimeEntryFormComponent from "./TimeEntryForm.js";

class EntryButton extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
      edit: false,
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
          Enter Time
        </a>
        <Modal form={this.state.form} handleClose={this.hideForm}>
          <TimeEntryFormComponent
            handleClose={this.hideForm}
            handleEntry={this.props.handleEntry}
            data={this.props.data}
            index={this.props.index}
          />
        </Modal>
      </div>
    );
  }
}

export default EntryButton;
