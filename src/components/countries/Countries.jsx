import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  //   console.log(countriesData);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <>
      <h1>Here {countries.length} countries data available.</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
