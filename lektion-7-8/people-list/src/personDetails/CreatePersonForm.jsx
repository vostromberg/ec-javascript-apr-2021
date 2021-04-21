import React, { useState } from "react";
import peopleService from "../api/peopleService";

const CreatePersonForm = (props) => {
  const { onCancel, onSave } = props;

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const isValid = name !== "" && role !== "";

  const handleSave = async () => {
    if(isValid && onSave){
      const newPerson = {
        name: name,
        role: role
      };
      const createdPerson = await peopleService.createPerson(newPerson);
      setName("");
      setRole("");
      onSave(createdPerson);
    }
  };

  return (
    <form id="person-form">
      <h2>Create person</h2>
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
        type="button"
        className="primary"
        onClick={handleSave}
        disabled={!isValid}
      >
        Save
      </button>
    </form>
  );
};

export default CreatePersonForm;
