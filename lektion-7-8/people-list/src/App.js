import logo from "./logo.svg";
import "./App.css";
import PeopleList from "./peopleList/PeopleList";
import PersonDetails from "./personDetails/PersonDetails";
import CreatePersonForm from "./personDetails/CreatePersonForm";
import EditPersonForm from "./personDetails/EditPersonForm";
import { useEffect, useState } from "react";
import peopleService from "./api/peopleService";

const viewModes = {
  view: "View",
  edit: "Edit",
  create: "Create",
};

function App() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const [viewMode, setViewMode] = useState(viewModes.create);

  const showCreateForm = () => {
    setSelectedPerson(null);
    setViewMode(viewModes.create);
  };
  
  const selectPerson = (person) => {
    setSelectedPerson(person);
    setViewMode(viewModes.view);
  };

  const handlePersonSave = (newPerson) => {
    const newArray = [...people, newPerson];
    setPeople(newArray);
    selectPerson(newPerson);
  };

  const handlePersonUpdate = (updatedPerson) => {
    const newArray = people.slice();
    for(var i = 0; i < newArray.length; i++){
      if(newArray[i].id === updatedPerson.id){
        newArray[i] = updatedPerson;
        break;
      }
    }
    setPeople(newArray);
    selectPerson(updatedPerson);
  }

  const handlePersonDeleted = (deletedPerson) => {
    setPeople(people.filter((person) => person.id !== deletedPerson.id));
    // getPeople();
    showCreateForm();
  };

  const getPeople = async () => {
    const people = await peopleService.getAll();
    setPeople(people);
  };

  useEffect(() => {
    getPeople();
  }, []);

  const renderMainSection = () => {
    if (!selectedPerson || viewMode === viewModes.create) {
      return (
        <CreatePersonForm
          onCancel={() => setViewMode(viewModes.view)}
          onSave={handlePersonSave}
        />
      );
    }
    switch (viewMode) {
      case viewModes.view:
        return (
          <PersonDetails
            person={selectedPerson}
            onDelete={handlePersonDeleted}
            onEdit={() => setViewMode(viewModes.edit)}
          />
        );
      case viewModes.edit:
        return (
          <EditPersonForm
            person={selectedPerson}
            onCancel={() => setViewMode(viewModes.view)}
            onSave={handlePersonUpdate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <aside>
        <h1 className="list-title">
          People
          <button
            id="button-add-person"
            className="primary"
            onClick={showCreateForm}
          >
            Add
          </button>
        </h1>
        <PeopleList
          people={people}
          selectedPerson={selectedPerson}
          onPersonSelected={selectPerson}
        />
      </aside>
      <section>{renderMainSection()}</section>
    </main>
  );
}

export default App;
