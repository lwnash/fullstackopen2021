import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>language</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="国旗" width="200" height="200" />
    </div>
  );
};

const Countries = ({ countries, userInput, setUserInput }) => {
  const countriesToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(userInput.toLowerCase())
  );

  if (!userInput) return <div>输入以查询</div>;

  else if (countriesToShow.length > 10)
    return <div>Too many matches, specify another filter</div>;
    
  else if (countriesToShow.length <= 10 && countriesToShow.length !== 1)
    return (
      <div>
        {countriesToShow.map((country) => (
          <div key={country.name}>
            {country.name}
            <button onClick={() => setUserInput(country.name)}>show</button>
          </div>
        ))}
      </div>
    );

  return <Country country={countriesToShow[0]} />;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <div>
        find countries
        <input onChange={handleInputChange} />
      </div>

      <Countries
        countries={countries}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
};

export default App;
