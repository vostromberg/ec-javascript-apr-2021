import React from "react";
import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) => {
  const { people, selectedPerson } = props;

  const handlePersonClicked = (person) => {
    if (props.onPersonSelected) {
      props.onPersonSelected(person);
    }
  };
  
  return (
    <ul className="people-list">
      {people.map((person) => (
        <PeopleListItem
          onClick={handlePersonClicked}
          key={person.id}
          person={person}
          isSelected={person === selectedPerson}
        />
      ))}
    </ul>
  );
};

export default PeopleList;
