import React from "react";
import Item from "../Item/Item";
import "./List.css";
export default function List(props) {
  const { events, handleEvent } = props;
  return (
    <>
      {events.map((event) => {
        return <Item key={event.id} {...event} handleEvent={handleEvent} />;
      })}
    </>
  );
}
