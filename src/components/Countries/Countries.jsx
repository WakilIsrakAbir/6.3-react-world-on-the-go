import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import "./Countries.css"
import { useState } from 'react';

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In The Counteies : {countries.length} </h1>
      <h3>Total Country Visited: {visitedCountries.length} </h3>
      <ol>
        {
          visitedCountries.map(country => <li
          key={country.cca3.cca3}
          > {country.name.common} </li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
          key={country.cca3.cca3}
            country={country}
            handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;