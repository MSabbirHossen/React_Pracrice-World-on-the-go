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
      <h4>Capital: {country.capital.capital}</h4>
      <p>
        Area: {country.area.area}
        {" ("}
        {country.area.area > 300000 ? "BIG Land" : "Small Land"}
        {") "}
      </p>
      <p>Total Population: {country.population.population}</p>
      <button className={`${visited && "visited-btn"}`} onClick={handelClicked}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleFlagBtn(country.flags.flags.png)}>
        {flags ? "Flag Added" : "Add Visited flags"}
      </button>
    </div>
  );
};

export default Country;
