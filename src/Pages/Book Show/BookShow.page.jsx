import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShowsContext } from "../../Context/ShowsContext";
import "./BookShow.style.css";

const BookShow = () => {
  const { id } = useParams();
  const [shows, getShowById] = useContext(ShowsContext);
  const [show, setShow] = useState(null);
  useEffect(() => {
    console.log(getShowById(id));
  }, [shows]);
  return (
    <div className="bookShow">
      <form>
        <h2>{show.name}</h2>
        <form action="">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name..."
            required
          />
          <label htmlFor="username">Name</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            required
          />
          <label htmlFor="day"></label>
          <input type="radio" name="day" />
        </form>
      </form>
    </div>
  );
};

export default BookShow;
