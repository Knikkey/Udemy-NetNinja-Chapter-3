import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Daegu");

  const resetState = () => {
    setTitle("");
    setDate("");
    setLocation("Daegu");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    props.addEvent(event);
    resetState();
  };

  return (
    <form className="new-event-form" onSubmit={submitHandler}>
      <label htmlFor="title">Enter Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="date">Enter Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <div>
        <label htmlFor="select">Event Location: </label>
        <select
          id="select"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option value="Daegu">Daegu</option>
          <option value="Busan">Busan</option>
          <option value="Masan">Masan</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
