import React from "react";
import peopleService from "../api/peopleService";

const PersonDetails = (props) => {
  const { person, onEdit, onDelete } = props;

  const handleDelete = async () => {
    const confirmationResult = window.confirm(`Do you really want to delete ${person.name}?`);
    if(confirmationResult){
      const deletedPerson = await peopleService.deletePerson(person.id);
      onDelete(deletedPerson);
    }
  }

  return (
    <div className="person-details">
      <h2>{person.name}</h2>
      <p>{person.role}</p>
      <button type="button" className="link-button danger" onClick={handleDelete}>
        Delete
      </button>
      <button type="button" className="link-button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default PersonDetails;
