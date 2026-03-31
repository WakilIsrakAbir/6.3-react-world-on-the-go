import React from 'react';
import "./Country.css"
import { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  // console.log(country.area.area);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    // basic system
    //   if(visited){
    //     setVisited(false);
    //   }else{
    //     setVisited(true);
    //   }
    // }

    // second system
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);

    handleVisitedCountries(country);
  };

  return (
    <div
      className={`country ${visited ? "country-visited" : "country-not-visited"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population} </p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;