const API = (() => {
  const URL = "https://event-list-json-server-zsvw.onrender.com/events";

  //=>Fetch all the events from server
  const getListFromServer = () => {
    let data = fetch(URL).then((res) => res.json());
    return data;
  };

  //=>Post a new event to the server
  const postEventToServer = (item) => {
    let data = fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) => res.json());
    return data;
  };

  //=>Delete an event from the server
  const deleteEventFromServer = (id) => {
    return fetch(URL + "/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  //=>Update an event to the server
  const editEventFromServer = (id, newEvent) => {
    let data = fetch(URL + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
    return data;
  };

  return {
    getListFromServer,
    postEventToServer,
    deleteEventFromServer,
    editEventFromServer,
  };
})();

export default API;
