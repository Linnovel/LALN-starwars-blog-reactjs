const getState = ({ getStore, getActions, setStore }) => {
  return {
    // almacenamiento central
    store: {
      swapiUrl: " https://swapi.tech/api/",
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    // funciones
    actions: {
      getCharacters: async (endpoint) => {
        try {
          const store = getStore();
          const response = await fetch(store.swapiUrl + endpoint);
          if (response.ok) {
            const data = await response.json();
            const baseList = data.results;
            baseList.forEach(async (baseItems) => {
              const newResponse = await fetch(baseItems.url);
              const detailData = await newResponse.json();
              setStore({ [endpoint]: [...store[endpoint], detailData.result] });
              console.log(`resultado ${endpoint}`, store[endpoint]);
            });
          }
        } catch (error) {}
      },
      addFavorite: (newFavorite) => {
        const store = getStore();
        const onlyOne = store.favorites.some((item) => item === newFavorite);

        if (!onlyOne) {
          setStore({ favorites: [...store.favorites, newFavorite] });
          return;
        }

        const favoritesFiltered = store.favorites.filter((favorite) => {
          return favorite !== newFavorite;
        });

        setStore({ favorites: [...favoritesFiltered] });
      },
      removeFavorite: (id) => {
        const store = getStore();
        const favoritesFiltered = store.favorites.filter((favorite) => {
          return favorite !== id;
        });

        setStore({ favorites: [...favoritesFiltered] });
      },
    },
  };
};

export default getState;
