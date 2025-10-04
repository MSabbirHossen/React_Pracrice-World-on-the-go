import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);

  const handelClicked = () => {
    setVisited(!visited);
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
    </div>
  );
};

export default Country;
