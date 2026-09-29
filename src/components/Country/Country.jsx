import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleVisitedCountries,

  handleVisitedFlags,
}) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);

  const handelClicked = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  const [flags, setFlags] = useState(false);
  const handleFlagBtn = () => {
    setFlags(!flags);
    handleVisitedFlags(country.flags.flags.png);
  };
  return (
    <div className={`country ${visited && "visited-country"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h4>Capital: {country.capital[0]}</h4>
      <p>
        Area: {(country.area / 1000).toFixed(0)}k km²
        <span
          className={`land-badge ${country.area > 300000 ? "big" : "small"}`}
        >
          {country.area > 300000 ? "🌍 Big Land" : "🏝️ Small Land"}
        </span>
      </p>
      <p>Population: {(country.population / 1000000).toFixed(1)}M</p>

      <div className="button-container">
        <button
          className={`${visited && "visited-btn"}`}
          onClick={handelClicked}
        >
          {visited ? "✓ Visited" : "Mark Visited"}
        </button>
        <button
          className="flag-btn"
          onClick={() => handleFlagBtn(country.flags.flags.png)}
        >
          {flags ? "✓ Added" : "Add Flag"}
        </button>
      </div>
    </div>
  );
};

export default Country;

