import React, { useContext, useEffect } from "react";
import Show from "../../components/Show/Show.component";
import { ShowsContext } from "../../Context/ShowsContext";
import "./Shows.style.css";
const Shows = () => {
  const [shows] = useContext(ShowsContext);

  return (
    <div className="showsList">
      {shows.map(({ show }) => (
        <Show key={show.id} show={show} />
      ))}
    </div>
  );
};

export default Shows;
