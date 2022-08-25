//This contains notes on:
//1. Using functions to handle prevState
//2. How to add events that need to take an argument.
//3. An alternative way to export (in Title.js)
//4. Destructuring props (in Title.js and Modal.js)
//5. How to use state for conditional rendering
//6. Form submission and rendering (NewEventForm.js and EventList.js)

import React, { useState } from "react";

import Title from "./component/Title";
import Modal from "./component/Modal";
import EventList from "./component/EventList";
import "./App.css";
import NewEventForm from "./component/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvent) => {
      return [...prevEvent, event];
    });
    modalHandler();
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
    console.log(id);
  };

  const subtitle = "All the latest events!";

  const modalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Title title="Events In Your Area" subtitle={subtitle} />
      <br />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {showEvents || (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}
      {showEvents && (
        <EventList events={events} handleClick={handleClick}></EventList>
      )}

      {showModal ? (
        <Modal onShowModal={modalHandler} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      ) : null}
      <button onClick={modalHandler}>Add New Event</button>
    </div>
  );
}

export default App;
