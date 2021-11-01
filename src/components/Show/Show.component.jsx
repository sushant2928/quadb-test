import React from "react";
import { Link } from "react-router-dom";
import "./Show.style.css";

const Show = ({ show }) => {
  const { id, name, url, language, rating, image } = show;

  return (
    <Link to={`/${id}`}>
      <div className="show">
        {rating.average && (
          <div className="show__rating">
            <i class="fas fa-star"></i>
            <span>{rating.average}</span>
          </div>
        )}
        <img src={image.medium} alt="Show" className="show__image" />
        <div className="show__details">
          <h2 className="show__name">{name}</h2>
          <p className="show__language">{language}</p>
        </div>
      </div>
    </Link>
  );
};

export default Show;
