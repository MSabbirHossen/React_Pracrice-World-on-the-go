import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("visitedCountries clicked", country);
  };
  const countriesData = use(countriesPromise);
  //   console.log(countriesData);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <>
      <h1>Here {countries.length} countries data available.</h1>
      <h3>
        Visited: {visitedCountries}
        <br />
        Not Visited:
      </h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handlevisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
