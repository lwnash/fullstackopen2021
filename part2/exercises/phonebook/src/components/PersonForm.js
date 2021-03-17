import React from 'react'

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

export default PersonForm