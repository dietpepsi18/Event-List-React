import React from "react";
import Item from "../Item/Item";

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
