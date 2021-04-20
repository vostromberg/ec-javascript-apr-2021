import React from "react";

const EditPersonForm = (props) => {
  const { person, onCancel, onSave } = props;

  return (
    <form id="person-form">
      <h2>Edit person</h2>
      <label>Name</label>
      <input name="name" required value={person.name} />
      <label>Role</label>
      <input name="role" value={person.role} />
      <br />
      <button type="button" className="link-button" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" className="primary" onClick={onSave}>
        Save
      </button>
    </form>
  );
};

export default EditPersonForm;
