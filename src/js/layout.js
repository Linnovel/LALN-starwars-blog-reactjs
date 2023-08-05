import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home.jsx";
import injectContext from "./store/appContext";
import { CharacterDetailsView } from "./views/CharacterDetailsView.jsx";
import { PlanetDetailsView } from "./views/PlanetDetailsView.jsx";
import { StartShipDetailsView } from "./views/StartShipDetailsView.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { PlanetView } from "./views/PlanetView.jsx";
import {ShipsView }from "./views/ShipsView.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planets" element={<PlanetView />} />
						<Route path="/starships" element={<ShipsView />} />
						<Route  path="/CharacterDetailsView/:id" element={<CharacterDetailsView />} />
						<Route  path="/PlanetDetailsView/:id" element={<PlanetDetailsView />} />
						<Route  path="/StartShipDetailsView/:id" element={<StartShipDetailsView/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
