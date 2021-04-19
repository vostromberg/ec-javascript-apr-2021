const { v4: uuidv4 } = require("uuid");
let storage = {};

const getRoutes = () => {
  const getRouteAndDescription = (method, route, description) => ({
    route,
    description,
    method,
  });
  return Object.keys(storage).map((key) => {
    const route = `/${key}`;
    return {
      route,
      getAll: getRouteAndDescription(
        "GET",
        `${route}`,
        `Gets all items under ${route}.`
      ),
      get: getRouteAndDescription(
        "GET",
        `${route}/:id`,
        `Gets item for id under ${route}.`
      ),
      createItem: getRouteAndDescription(
        "POST",
        `${route}`,
        `Creates item under ${route}`
      ),
      createItem: getRouteAndDescription(
        "PUT",
        `${route}/:id`,
        `Updates item for given id under ${route}`
      ),
      createItem: getRouteAndDescription(
        "DELETE",
        `${route}/:id`,
        `Deletes item for given id under ${route}`
      ),
    };
  });
};

module.exports = (route) => {
  if (!route) {
    return { getRoutes };
  }
  if (!storage[route]) {
    storage = {
      ...storage,
      [route]: [],
    };
  }
  return {
    getRoutes,
    getAll: () => storage[route],
    addItem: (item) => {
      const newItem = {
        id: uuidv4(),
        created: Date.now(),
        ...item,
      };
      storage = {
        ...storage,
        [route]: [...storage[route], newItem],
      };
      return newItem;
    },
    removeItem: (id) => {
      const removedItem = storage[route].find((x) => x.id === id);
      if (removedItem) {
        storage = {
          ...storage,
          [route]: storage[route].filter((x) => x.id != id),
        };
        return removedItem;
      } else {
        throw `Could not find item with id ${id}`;
      }
    },
    updateItem: (id, item) => {
      storage = {
        ...storage,
        [route]: [route].map((x) => {
          if (x.id !== id) {
            return x;
          } else {
            return {
              ...x,
              ...item,
              updated: Date.now(),
            };
          }
        }),
      };
      return storage[route].find((x) => x.id === id);
    },
    getItem: (id) => {
      return storage[route].find((x) => x.id === id);
    },
  };
};
