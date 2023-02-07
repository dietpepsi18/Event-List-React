import React, { useState } from "react";
import "./Header.css";
export default function Header(props) {
  const { setAddNew, handleEvent } = props;

  //show input window to add new event
  const showInputWindow = () => {
    setAddNew(true);
  };

  return (
    <div>
      <header className="header">
        <button className="header__add" onClick={showInputWindow}>
          Add New Event
        </button>
      </header>
    </div>
  );
}
