import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ city: "" });
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  async function getLocation() {
    const API =
      // insert API key here
      "";
    const res = await axios.get(API);
    setLocation(res.data[0]);
  }

  function handleType(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <h1>City Form</h1>
      <p>City: {form.city}</p>
      <form onClick={handleSubmit}>
        {/* <label htmlFor="city">City</label> */}
        <input
          name="city"
          placeholder="Name your City"
          onChange={handleChange}
        />
        <input type="submit" value="Explore!" />
      </form>
      {/* this all needs sorting in realtion to the form functions handleType */}{" "}
      */}
      {/* <div className="App"> */}
      {/* <input onChange={handleType} /> */}
      {/* <button onClick={getLocation}>Get Location Details</button> */}
      {/* <h1>The city is: {location.display_name}</h1> */}
    </div>
  );
}

export default App;
