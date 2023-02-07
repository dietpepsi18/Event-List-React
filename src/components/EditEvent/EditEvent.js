import React, { useState } from "react";

export default function EditEvent(props) {
  const { eventName, startDate, endDate, id } = props;
  const { handleEvent } = props;
  const { setIsEditing } = props;
  const [item, setItem] = useState({ eventName, startDate, endDate, id });

  const handleChange = (e) => {
    if (e.target.parentNode.classList.contains("event-list__event")) {
      setItem({ ...item, eventName: e.target.value });
    } else if (e.target.parentNode.classList.contains("event-list__start")) {
      setItem({ ...item, startDate: e.target.value });
    } else if (e.target.parentNode.classList.contains("event-list__end")) {
      setItem({ ...item, endDate: e.target.value });
    }
  };

  const handleEditSave = async (id, item) => {
    const result = await handleEvent.editEvent(id, item);

    if (result) {
      setIsEditing(false);
    }
  };

  return (
    <tr className="event-list__item">
      <th className="event-list__event">
        <input type="text" value={item.eventName} onChange={handleChange} />
      </th>
      <th className="event-list__start">
        <input type="date" value={item.startDate} onChange={handleChange} />
      </th>
      <th className="event-list__end">
        <input type="date" value={item.endDate} onChange={handleChange} />
      </th>
      <th className="event-list__actions">
        <div
          className="event-list__save"
          onClick={() => {
            handleEditSave(id, item);
          }}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z" />
          </svg>
        </div>
        <div className="event-list__cancel" onClick={() => setIsEditing(false)}>
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
