//This contains notes on:
//1. Using functions to handle prevState
//2. How to add events that need to take an argument.
//3. An alternative way to export (in Title.js)
//4. Destructuring props (in Title.js and Modal.js)
//5. How to use state for conditional rendering

import React, { useState } from "react";

import Title from "./component/Title";
import Modal from "./component/Modal";
import EventList from "./component/EventList";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

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
      <button onClick={modalHandler}>Looking for deals?</button>
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
          <h2>10% off code!</h2>
          <p>Use the code NINJA10 at the checkout.</p>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
