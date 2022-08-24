import { useState } from "react";

import Title from "./component/Title";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <Title title="Events In Your Area" subtitle={subtitle} />
      <Title title="Another title" subtitle="another sub" />
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
      {showEvents &&
        events.map((event) => {
          return (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleClick(event.id)}>
                Delete event
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
