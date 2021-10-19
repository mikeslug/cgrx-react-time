import React from "react";
import DisplayTimer from "./DisplayTimer";
import EditButton from "./EditButton";

const TimeEntry = (props) => {
  const data = props.formData;
  const ind = props.index;
  const timer = data.timerOn;
  const del = props.handleRemoveItem;
  const edit = true;
  return (
    <div className="time-entry">
      <div className="entry-wrap">
        <div className="entry-left">
          <div className="entry-field entry-date">{data.date}</div>
          <div className="entry-field entry-pay">
            <div className="entry-field entry-time">
              {!timer ? (
                <div>
                  {data.hours}:{data.minutes}
                </div>
              ) : (
                <div>
                  <DisplayTimer startTime={data.timerAt} />
                </div>
              )}
            </div>
            <div className="entry-field entry-pay-type">{data.payType}</div>
          </div>
        </div>
        <div className="entry-right">
          <div className="entry-field entry-proj">{data.project}</div>
          <div className="entry-field entry-notes">{data.notes}</div>
        </div>
        <div className="entry-buttons">
          <a className="button" date={data.date} onClick={del}>
            DELETE
          </a>
          <EditButton edit={edit} data={data} index={ind} />
        </div>
      </div>
    </div>
  );
};

export default TimeEntry;
