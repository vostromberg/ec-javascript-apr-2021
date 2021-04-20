import React from "react";

const CreatePersonForm = (props) => {
  const { onCancel, onSave } = props;
  return (
    <form id="person-form">
      <h2>Create person</h2>
      <label>Name</label>
      <input name="title" required value="Name" />
      <label>Role</label>
      <input name="description" rows="3" />
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

export default CreatePersonForm;
