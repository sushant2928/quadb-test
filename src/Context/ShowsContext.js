import { createContext, useEffect, useState } from "react";

export const ShowsContext = createContext();

export const ShowsProvider = (props) => {
  const fetchURL = "https://api.tvmaze.com/search/shows?q=all";
  const [shows, setShows] = useState([]);
  const fetchShowsList = () => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchShowsList();
  }, []);
  const getShowById = (id) => {
    for (const show of shows) {
      if (show.show.id == id) {
        return show.show;
      }
    }
  };

  return (
    <ShowsContext.Provider value={[shows, getShowById]}>
      {props.children}
    </ShowsContext.Provider>
  );
};
