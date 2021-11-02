import React, { useContext, useEffect, useState } from "react";
import Show from "../../components/Show/Show.component";
import { ShowsContext } from "../../Context/ShowsContext";
import "./Shows.style.css";
const Shows = () => {
  const [shows] = useContext(ShowsContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    if (user) {
      alert(`This Data is from local storage:  ${JSON.stringify(user)}`);
    }
  }, []);
  return (
    <div className="showsPage">
      {user && <h2>Hello {user.name},</h2>}
      <div className="showsList">
        {shows.map(({ show }) => (
          <Show key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
