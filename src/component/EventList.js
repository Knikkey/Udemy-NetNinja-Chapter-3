import React from "react";

export default function EventList(props) {
  return (
    <div>
      {props.events.map((event) => {
        return (
          <React.Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => props.handleClick(event.id)}>
              Delete event
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}
