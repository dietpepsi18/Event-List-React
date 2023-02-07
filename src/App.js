import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import NewEvent from "./components/NewEvent/NewEvent";
import API from "./api";
import "./App.css";

export default function App() {
  //state
  const [list, setList] = useState([]);
  const [addNew, setAddNew] = useState(false);

  useEffect(() => {
    API.getListFromServer().then((data) => {
      setList([...data]);
    });
  }, []);

  const handleEvent = (() => {
    //delete an event
    const deleteEvent = (id) => {
      return API.deleteEventFromServer(id).then(() => {
        const newList = list;
        newList.forEach((cur, i) => {
          if (cur.id === id) {
            newList.splice(i, 1);
          }
        });

        setList([...newList]);
      });
    };

    //add new event
    const addEvent = (item) => {
      if (item.eventName && item.startDate && item.endDate) {
        const start = new Date(item.startDate);
        const end = new Date(item.endDate);
        if (end >= start) {
          return API.postEventToServer(item).then((data) => {
            setList([...list, data]);
            setAddNew(false);
          });
        } else {
          alert("start date should be earlier than end date");
          return;
        }
      } else {
        alert("All the fields are required");
      }
    };

    //edit an event
    const editEvent = (id, newEvent) => {
      let isSuccess = false;
      if (newEvent.eventName && newEvent.startDate && newEvent.endDate) {
        const start = new Date(newEvent.startDate);
        const end = new Date(newEvent.endDate);
        if (end >= start) {
          return API.editEventFromServer(id, newEvent).then((data) => {
            const newList = list;
            for (let i = 0; i < newList.length; i++) {
              if (newList[i].id === id) {
                newList[i] = { ...data };
                break;
              }
            }
            setList([...newList]);
            isSuccess = true;
            return isSuccess;
          });
        } else {
          alert("start date should be earlier than end date");
          return isSuccess;
        }
      } else {
        alert("All the fields are required");
        return isSuccess;
      }
    };

    return { deleteEvent, addEvent, editEvent };
  })();

  return (
    <div className="wrapper">
      <Header events={list} setAddNew={setAddNew} handleEvent={handleEvent} />
      <main className="main">
        <table className="event-list">
          <thead className="event-list__head">
            <tr>
              <th>Event</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="event-list__body">
            <List events={list} handleEvent={handleEvent} />
            {addNew === true ? (
              <NewEvent setAddNew={setAddNew} handleEvent={handleEvent} />
            ) : null}
          </tbody>
        </table>
      </main>
    </div>
  );
}
