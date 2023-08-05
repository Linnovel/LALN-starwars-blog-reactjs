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
		console.log(newFavorite);
		const onlyOne = store.favorites.some((item) => item === newFavorite);
		if (onlyOne === true) {
		  return;
		} else {
		  setStore({ favorites: [...store.favorites, newFavorite] });
		}
	  },
	  removeFavorite: (index) => {
		const { favorites } = getStore();
		favorites.splice(index, 1);
		setStore(...favorites);
	  },
    },
  };
};

export default getState;
