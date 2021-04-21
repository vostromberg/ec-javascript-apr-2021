const apiAddress = "http://localhost:3002/people";

const peopleService = {
  getAll: async () => {
    const response = await fetch(apiAddress);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText,
    });
  },
  createPerson: async (newPerson) => {
    const response = await fetch(apiAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText,
    });
  },
  updatePerson: async (id, updatedPerson) => {
    const response = await fetch(`${apiAddress}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPerson)
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText,
    });
  },
  deletePerson: async (id) => {
    const response = await fetch(`${apiAddress}/${id}`, { method: "DELETE" });
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText,
    });
  },
};

export default peopleService;
