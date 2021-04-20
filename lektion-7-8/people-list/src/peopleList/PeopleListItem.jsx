import React from "react";

/*
<li className="people-list-item people-list-item--selected">
          <div className="people-list-item__info">
            <h3>Jane Doe</h3>
            <p>Frontend-developer</p>
          </div>
        </li>
*/

const PeopleListItem = (props) => {
  const { person, isSelected, onClick } = props;
  let className = "people-list-item";
  if(isSelected){
      className += " people-list-item--selected";
  }
  const handleClick = () => {
    if(onClick){
        onClick(person);
    }
  }
  return (
    <li className={className} onClick={handleClick}>
      <div className="people-list-item__info">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </li>
  );
};

export default PeopleListItem;
