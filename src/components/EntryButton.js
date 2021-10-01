import React, { Component } from "react";
import Modal from "./Modal.js";
import TimeEntryFormComponent from "./TimeEntryForm.js";

class EntryButton extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
    // this.showForm = this.showForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  //   showForm() {
  //     this.setState({
  //       form: !this.state.form,
  //     });
  //   }

  showForm = () => {
    this.setState({ form: true });
  };

  hideForm = () => {
    this.setState({ form: false });
  };

  render() {
    // const { form } = this.state;
    return (
      <div className="button-container">
        <a className="button" onClick={() => this.showForm()}>
          Enter Time
        </a>
        <Modal form={this.state.form} handleClose={this.hideForm}>
          <TimeEntryFormComponent
            handleClose={this.hideForm}
            handleEntry={this.props.handleEntry}
          />
        </Modal>
      </div>
    );
  }
}

export default EntryButton;
