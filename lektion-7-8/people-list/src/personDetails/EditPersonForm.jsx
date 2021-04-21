import React, { useState } from "react";
import peopleService from "../api/peopleService";

const EditPersonForm = (props) => {
  const { person, onCancel, onSave } = props;
  const [name, setName] = useState(person.name);
  const [role, setRole] = useState(person.role);
  const isValid = name !== "" && role !== "";

  async function handleSave(){
    if (isValid && onSave) {
      const updatedPersonInfo = { 
        ...person, 
        name: name,
        role: role
       };
      const updatedPerson = await peopleService.updatePerson(person.id, updatedPersonInfo);
      onSave(updatedPerson);
    }
  };

  return (
    <form id="person-form">
      <h2>Edit person</h2>
      <label>Name</label>
      <input
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Role</label>
      <input
        name="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <br />
      <button type="button" className="link-button" onClick={onCancel}>
        Cancel
      </button>
      <button
        disabled={!isValid}
        type="button"
        className="primary"
        onClick={handleSave}
      >
        Save
      </button>
    </form>
  );
};

export default EditPersonForm;
