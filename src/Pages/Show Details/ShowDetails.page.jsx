import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ShowDetails.style.css";
import Tag from "../../components/Tag/Tag.components";
import { ShowsContext } from "../../Context/ShowsContext";
import { Link } from "react-router-dom";
const ShowDetails = () => {
  const { id } = useParams();
  const [shows, getShowById] = useContext(ShowsContext);
  const [show, setShow] = useState(null);
  useEffect(() => {
    setShow(getShowById(id));
  }, [shows]);
  return (
    <>
      {show && (
        <div className="showDetails">
          <img
            src={show.image.original}
            alt={show.name}
            className="showDetails__image"
          />
          <div className="showDetails__details">
            <div className="showDetails__namerate">
              <h2 className="showDetails__name">{show.name}</h2>
              {show.rating.average && (
                <div className="showDetails__rating">
                  <i class="fas fa-star"></i>
                  <span>{show.rating.average}</span>
                </div>
              )}
            </div>

            <div className="showDetails__tags">
              {show.genres.map((genre) => (
                <Tag tag={genre} />
              ))}
              <Tag tag={show.language} />
              <Tag tag={show.type} />
            </div>

            <Link to={`/book-show/${id}`}>
              <button
                className={`showDetails__bookButton ${
                  show.status === "Running" ? "--active" : "--inactive"
                }`}
                disabled={show.status !== "Running"}
              >
                {show.status === "Running" ? "Book Now" : "No Shows available"}
              </button>
            </Link>
            <h3 className="showDetails__aboutHeading">About This Show</h3>
            <p
              className="showDetails__summary"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetails;
