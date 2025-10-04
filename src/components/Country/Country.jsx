import React from "react";

const Country = ({ country }) => {
  // console.log(country);
  //   const { name } = country;
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Total Population: {country.population.population}</p>
      <h4>Capital: {country.capital.capital}</h4>
    </div>
  );
};

export default Country;
