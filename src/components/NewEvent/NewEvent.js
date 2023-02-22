import React, { useState } from "react";
import "./NewEvent.scss";

export default function NewEvent(props) {
  const [item, setItem] = useState({});
  const { handleEvent, setAddNew } = props;

  const handleChange = (e) => {
    if (e.target.parentNode.classList.contains("event-list__event")) {
      setItem({ ...item, eventName: e.target.value });
    } else if (e.target.parentNode.classList.contains("event-list__start")) {
      setItem({ ...item, startDate: e.target.value });
    } else if (e.target.parentNode.classList.contains("event-list__end")) {
      setItem({ ...item, endDate: e.target.value });
    }
  };

  return (
    <tr className="event-list__item">
      <th className="event-list__event">
        <input onChange={handleChange} />
      </th>
      <th className="event-list__start">
        <input type="date" onChange={handleChange} />
      </th>
      <th className="event-list__end">
        <input type="date" onChange={handleChange} />
      </th>
      <th className="event-list__actions">
        <div
          className="event-list__add"
          onClick={() => handleEvent.addEvent(item)}
        >
          +
        </div>
        <div
          className="event-list__delete-input"
          onClick={() => {
            setAddNew(false);
          }}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
          </svg>
        </div>
      </th>
    </tr>
  );
}
