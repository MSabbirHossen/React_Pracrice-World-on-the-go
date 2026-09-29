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
      <h1>🌍 Explore the World</h1>

      {/* Stats Section */}
      <div className="stats-header">
        <div className="stat-item">
          <h3>Total Countries</h3>
          <div className="count">{countries.length}</div>
        </div>
        <div className="stat-item">
          <h3>Visited</h3>
          <div className="count">{visitedCountries.length}</div>
        </div>
        <div className="stat-item">
          <h3>Not Visited</h3>
          <div className="count">
            {countries.length - visitedCountries.length}
          </div>
        </div>
      </div>

      {/* Visited Countries Section */}
      {visitedCountries.length > 0 && (
        <div className="visited-section">
          <h3>✅ Visited Countries</h3>
          <ol className="visited-list">
            {visitedCountries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Flag Gallery Section */}
      {visitedFlags.length > 0 && (
        <div className="flags-section">
          <h3>🚩 Visited Flags ({visitedFlags.length})</h3>
          <div className="visited-flags-container">
            {visitedFlags.map((flag, index) => (
              <img key={index} src={flag} alt="visited flag" />
            ))}
          </div>
        </div>
      )}

      {/* Countries Grid */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
