import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import Timer from "./Timer";

const TimeEditFormComponent = ({ editData, handleClose, handleEntry }) => {
  const [formData, updateFormData] = useState([]);
  const [formSubmitted, updateFormSubmitted] = useState("false");

  //   useEffect(() => {
  //     updateFormData(editData);
  //   }, [editData]);

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

  const clearState = () => {
    setTimeout(() => {
      updateFormData([]);
      updateFormSubmitted(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEntry(formData);
    handleClose();
    updateFormSubmitted(true);
    clearState();
  };

  const timerActive = () => {
    updateFormData({
      ...formData,
      timerOn: true,
    });
  };

  const timerInactive = () => {
    updateFormData({
      ...formData,
      timerOn: false,
    });
  };

  const getTimer = (seconds) => {
    updateFormData({
      ...formData,
      timerAt: seconds,
    });
  };

  const projects = [
    {
      key: "WCON-Egyptian Telephone Coop Association",
      value: "WCON-Egyptian Telephone Coop Association",
      text: "WCON-Egyptian Telephone Coop Association",
      name: "project",
    },
    {
      key: "WCON-Ontonagon County Telephone Company",
      value: "WCON-Ontonagon County Telephone Company",
      text: "WCON-Ontonagon County Telephone Company",
      name: "project",
    },
    {
      key: "WCON-CenturyLink",
      value: "WCON-CenturyLink",
      text: "WCON-CenturyLink",
      name: "project",
    },
    {
      key: "WCON-TDS",
      value: "WCON-TDS",
      text: "WCON-TDS",
      name: "project",
    },
    {
      key: "WCON-Shawnee Communications",
      value: "WCON-Shawnee Communications",
      text: "WCON-Shawnee Communications",
      name: "project",
    },
    {
      key: "WCON-Hiawatcha Telephone Company",
      value: "WCON-Hiawatcha Telephone Company",
      text: "WCON-Hiawatcha Telephone Company",
      name: "project",
    },
  ];

  const payTypes = [
    {
      key: "REG",
      value: "REG",
      text: "REG",
      name: "payType",
    },
    {
      key: "Per Diem",
      value: "Per Diem",
      text: "Per Diem",
      name: "payType",
    },
    {
      key: "Prevailing Wage",
      value: "Prevailing Wage",
      text: "Prevailing Wage",
      name: "payType",
    },
  ];

  return (
    <div className="form-wrapper">
      <div className="ui form">
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
          <label>Pay Type</label>
          <Dropdown
            placeholder="Select Pay Type"
            fluid
            search
            selection
            options={payTypes}
            name="payType"
            value={formData.payType}
            onChange={handleDropdownChange}
          />
        </div>
        <div className="inline fields date">
          <label>Date:</label>
          <div className="eight wide field required">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <Timer
          timerActive={timerActive}
          timerInactive={timerInactive}
          getTimer={getTimer}
          formSubmitted={formSubmitted}
        />
        <div className="inline fields time">
          <label>Hours/Minutes:</label>
          <div className="four wide field hours required">
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
          <div className="four wide field mins required">
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
        </div>{" "}
      </div>
    </div>
  );
};

export default TimeEditFormComponent;
