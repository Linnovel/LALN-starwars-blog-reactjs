const getState = ({ getStore, getActions, setStore }) => {
	return {
		// almacenamiento central
		store: {
			swapiUrl: " https://swapi.tech/api/",
			people: [],
			vehicules: [],
			planets: [],
			favorites: [],
		},
		// funciones
		actions: {

			getCharacters: async (endpoint) => {

				const store = getStore();
				const response = await fetch(store.swapiUrl + endpoint);
				if (response.ok) {
					const data = await response.json();
					const baseList = data.results;
					baseList.forEach( async (baseItems) => {
						const newResponse = await fetch(baseItems.url)
						const detailData = await newResponse.json();
						setStore({[endpoint]: [...store[endpoint], detailData.result]})
						console.log(`resultado ${endpoint}`,store[endpoint]);
					});
				}
			}
		},
	};
};

export default getState;
