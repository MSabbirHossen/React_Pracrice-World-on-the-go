import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("visitedCountries clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flag) => {
    console.log("object", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  //   console.log(countriesData);
  const countries = countriesData.countries;
  //   console.log(countries);

  return (
    <>
      <h1>Here {countries.length} countries data available.</h1>
      <h3>Visited: {visitedCountries.length}</h3>
      <ol className="card">
        {visitedCountries.map((country, index) => (
          <li key={index}>{country.name.common} </li>
        ))}
      </ol>
      <h3>Visited Flags: {visitedFlags.length}</h3>
      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt=""></img>
        ))}
      </div>

      <h3>Not Visited: {countries.length - visitedCountries.length}</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
