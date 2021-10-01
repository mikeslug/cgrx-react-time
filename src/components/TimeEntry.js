import React, { useState } from "react";

const TimeEntry = (props) => {
  const count = props.count - 1;
  const data = props.formData[count];
  // const data = props.formData;
  console.log("time entry component props", props);
  return (
    // console.log("time entry data", props.formData),
    <div className="time-entry">
      <div className="entry-wrap">
        <div className="entry-left">
          <div className="entry-field entry-date">{data.date}</div>
          <div className="entry-field entry-pay">
            <div className="entry-field entry-time">
              {data.hours}:{data.minutes}
            </div>
            <div className="entry-field entry-pay-type">{data.payType}</div>
          </div>
        </div>
        <div className="entry-right">
          <div className="entry-field entry-proj">{data.project}</div>
          <div className="entry-field entry-notes">{data.notes}</div>
        </div>
      </div>
    </div>
  );
};

export default TimeEntry;
