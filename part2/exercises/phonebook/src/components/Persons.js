import React from 'react'

const Person = ({ person, handleDeleteClick }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={() => handleDeleteClick(person.id)}>delete</button></td>
    </tr>
  );
};

const Persons = ({ persons, handleDeleteClick, filterName }) => {
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <table>
      <tbody>
        {personsToShow.map((person) => (
          <Person person={person} handleDeleteClick={handleDeleteClick} key={person.name} />
        ))}
      </tbody>
    </table>
  );
};

export default Persons