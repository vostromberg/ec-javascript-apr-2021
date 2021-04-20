import logo from "./logo.svg";
import "./App.css";
import PeopleList from "./peopleList/PeopleList";
import PersonDetails from "./personDetails/PersonDetails";
import CreatePersonForm from "./personDetails/CreatePersonForm";
import EditPersonForm from "./personDetails/EditPersonForm";
import { useState } from "react";

const viewModes = {
  view: "View",
  edit: "Edit",
  create: "Create",
};

function App() {
  const [people, setPeople] = useState([
    {
      id: "55edb8d2-9000-4d64-bcb7-3bd81bcc06a0",
      name: "John Doe",
      role: "UX-designer",
      created: 1618488094380,
    },
    {
      id: "41b52cbe-2f08-4b89-9b9f-5d36189b4abf",
      name: "Jane Doe",
      role: "Frontend-developer",
      created: 1618488116543,
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [viewMode, setViewMode] = useState(viewModes.view);

  const renderMainSection = () => {
    switch (viewMode) {
      case viewModes.view:
        return (
          <PersonDetails
            person={selectedPerson}
            onEdit={() => setViewMode(viewModes.edit)}
          />
        );
      case viewModes.edit:
        return (
          <EditPersonForm
            person={selectedPerson}
            onCancel={() => setViewMode(viewModes.view)}
            onSave={() => setViewMode(viewModes.view)}
          />
        );
      case viewModes.create:
        return (
          <CreatePersonForm
            onCancel={() => setViewMode(viewModes.view)}
            onSave={() => setViewMode(viewModes.view)}
          />
        );
      default:
        return null;
    }
  };

  const handlePersonSelected = (person) => {
    setSelectedPerson(person);
    setViewMode(viewModes.view);
  };

  return (
    <main>
      <aside>
        <h1 className="list-title">
          People
          <button
            id="button-add-person"
            className="primary"
            onClick={() => setViewMode("Create")}
          >
            Add
          </button>
        </h1>
        <PeopleList
          people={people}
          selectedPersonId={selectedPerson.id}
          onPersonSelected={handlePersonSelected}
        />
      </aside>
      <section>{renderMainSection()}</section>
    </main>
  );
}

export default App;
