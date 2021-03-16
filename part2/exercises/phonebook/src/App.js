import React, { useState } from "react";

const Person = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  );
};

const Persons = ({ persons, filterName }) => {
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <table>
      <tbody>
        {personsToShow.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </tbody>
    </table>
  );
};

const Filter = ({ setFilterName }) => {
  return (
    <div>
      filter shown with
      <input onChange={(e) => setFilterName(e.target.value)} />
    </div>
  );
};

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleAddClick,
}) => {
  return (
    <form>
      <div>
        name:{""}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{""}
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={handleAddClick}>
          add
        </button>
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleAddClick = (e) => {
    e.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObj));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setFilterName={setFilterName} />

      <h3>add a new</h3>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleAddClick={handleAddClick}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
