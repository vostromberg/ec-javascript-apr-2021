import React from "react";

const PersonDetails = (props) => {
  const { person, onEdit, onDelete } = props;
  return (
    <div className="person-details">
      <h2>{person.name}</h2>
      <p>{person.role}</p>
      <button type="button" className="link-button danger" onClick={onDelete}>
        Delete
      </button>
      <button type="button" className="link-button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default PersonDetails;
