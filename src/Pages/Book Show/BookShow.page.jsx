import React, { useContext, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import Input from "../../components/Form Input/Input.component";
import { ShowsContext } from "../../Context/ShowsContext";
import "./BookShow.style.css";
const BookShow = () => {
  const { id } = useParams();
  const [shows, getShowById] = useContext(ShowsContext);
  const [show, setShow] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showSlot, setShowSlot] = useState({
    show: null,
    name: "",
    email: "",
    day: "",
  });
  useEffect(() => {
    setShow(getShowById(id));
  }, [shows]);
  useEffect(() => {
    if (show) {
      setShowSlot({ ...showSlot, show, day: show.schedule.days[0] });
    }
  }, [show]);
  const handleChange = (e) => {
    console.log([e.target.name], e.target.value);
    setShowSlot({ ...showSlot, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SHOW SLOT", showSlot);
    localStorage.setItem(
      "user",
      JSON.stringify({ name: showSlot.name, email: showSlot.email })
    );
    setSubmitted(true);
    alert("User Details Stored in local storage");
  };
  return (
    <div className="bookShow">
      {show && (
        <form onSubmit={(e) => handleSubmit(e)} className="bookShow__form">
          <h1 className="bookShow__heading">Book Ticket</h1>
          <Input
            label="Movie Name"
            type="text"
            name="movieName"
            value={show.name}
            disabled
            required
          ></Input>

          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="Enter Your Name..."
            value={showSlot.name}
            handleChange={handleChange}
            required
          ></Input>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            required
            handleChange={handleChange}
            value={showSlot.email}
          ></Input>

          <div>
            <label htmlFor="day" className="bookShow__label">
              Select Day
            </label>
            <select
              className="bookShow__select"
              name="day"
              required
              onChange={(e) => handleChange(e)}
              value={showSlot.day}
            >
              {show.schedule.days.map((day) => (
                <option value={day}>{day}</option>
              ))}
            </select>
          </div>
          <Input
            label="Time"
            type="text"
            name="time"
            value={show.schedule.time}
            required
            disabled
            handleChange={handleChange}
          ></Input>
          {!submitted ? (
            <button type="submit" className="bookShow__button">
              Book Slot
            </button>
          ) : (
            <>
              <br />
              <Link to="/" className="bookShow__link">
                Redirect To Homepage
              </Link>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default BookShow;
