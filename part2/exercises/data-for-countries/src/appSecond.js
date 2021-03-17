import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value;

    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const countriesToShow = response.data.filter((country) =>
        country.name.toLowerCase().includes(userInput.toLocaleLowerCase())
      );
      setCountries(countriesToShow);
    });
  };

  return (
    <div>
      <div>
        find countries
        <input onChange={handleInputChange} />
      </div>
      {console.log(countries)}
    </div>
  );
};

export default App;
