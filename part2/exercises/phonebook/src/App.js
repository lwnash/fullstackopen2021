import React, { useEffect, useState } from "react";
import personService from "./services/persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const message = (msg) => {
    if (window.confirm(msg)) return true;
    else return false;
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const existed = persons.find((person) => person.name === newName);

    if (
      existed &&
      message(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const personObj = { ...existed, number: newNumber };

      setPersons(
        persons.map((person) => (person.id === personObj.id ? personObj : person))
      );
      setNewName("");
      setNewNumber("");
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDeleteClick = (id) => {
    const person = persons.find((p) => p.id === id);

    if (message(`delete ${person.name} ?`)) {
      personService.delPerson(id).then(() => {
        const deledPersons = persons.filter((p) => p.id !== id);

        setPersons(deledPersons);
      });
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

      <Persons
        persons={persons}
        handleDeleteClick={handleDeleteClick}
        filterName={filterName}
      />
    </div>
  );
};

export default App;
