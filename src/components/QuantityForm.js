import React, { Component, useState } from "react";
import faker from "faker";
import { Dropdown } from "semantic-ui-react";

const QuantityFormComponent = () => {
  const [formData, updateFormData] = useState({
    project: "",
    workType: "",
    date: "",
    hours: "",
    minutes: "",
    notes: "",
    workType: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownChange = (e, data) => {
    updateFormData({
      ...formData,
      [e.currentTarget.getAttribute("name")]: data.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const projects = [];
  for (let i = 0; i <= 20; i++) {
    var company = faker.company.companyName();
    projects.push({
      key: company.replace(/\W/g, ""),
      text: company,
      value: company,
      name: "project",
    });
  }

  const workTypes = [
    {
      key: "Construction",
      value: "Construction",
      text: "Construction",
      name: "workType",
    },
    {
      key: "Engineering",
      value: "Engineering",
      text: "Engineering",
      name: "workType",
    },
    {
      key: "Other",
      value: "Other",
      text: "Other",
      name: "workType",
    },
  ];

  return (
    <div className="form-wrapper">
      <form className="ui form">
        <div className="inline fields sixteen wide project">
          <label>Project</label>
          <Dropdown
            placeholder="Select Project"
            fluid
            search
            selection
            options={projects}
            name="project"
            value={formData.project}
            onChange={handleDropdownChange}
          />
        </div>
        <div className="inline fields sixteen wide work-type">
          <label>Work Type</label>
          <Dropdown
            placeholder="Select Work Type"
            fluid
            search
            selection
            options={workTypes}
            name="workType"
            value={formData.workType}
            onChange={handleDropdownChange}
          />
        </div>
        <div className="inline fields date">
          <label>Date:</label>
          <div className="eight wide field">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inline fields time">
          <label>Hours/Minutes:</label>
          <div className="four wide field hours">
            <input
              type="number"
              name="hours"
              placeholder="8"
              tabIndex="500"
              maxLength="4"
              value={formData.hours}
              onChange={handleChange}
            />
            <span className="">h</span>
          </div>
          <div className="four wide field mins">
            <input
              type="number"
              name="minutes"
              value={formData.minutes}
              onChange={handleChange}
              placeholder="15"
              tabIndex="500"
              maxLength="4"
            />
            <span className="">m</span>
          </div>
        </div>
        <div className="field">
          <label>Notes</label>
          <textarea
            rows="4"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="ui basic button" onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
};

export default QuantityFormComponent;
