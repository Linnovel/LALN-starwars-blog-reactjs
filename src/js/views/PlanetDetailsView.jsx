import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planets from "../../img/planets.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

// Tatoine no se muestra. problemas con la API De las imagenes de StarWars  
// Refactorizar 

export const PlanetDetailsView = () => {
	const { store } = useContext(Context)
	const [plan, setPlan] = useState(null)

	const params = useParams();
	const formatted = params.id.replace('hack', "/")

	useEffect(() => {
		const planets = store.planets.find((detail) => params.id === detail._id)
		setPlan(planets)
	}, [store.planets, params])

	return (
		<>
			<div className="container border-0 my-3 fix" >
				<div className="card ">
					<div className="col">
					</div>
					<img
                src={`https://starwars-visualguide.com/assets/img/planets/${plan?.uid}.jpg`}
              />

					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Name {plan?.properties?.name}</h5>
							<ul>
								<li className="card-text ">Diameter: {plan?.properties.diameter}</li>
								<li className="card-text ">Rotation period: {plan?.properties.rotation_period}</li>
								<li className="card-text ">Orbital period {plan?.properties.orbital_period}</li>
								<li className="card-text ">Gravity {plan?.properties?.gravity}</li>
								<li className="card-text ">Population: {plan?.properties?.population}</li>
								<li className="card-text ">Climate: {plan?.properties?.climate}</li>
								<li className="card-text ">Terrain: {plan?.properties?.terrain}</li>
								<li className="card-text ">Surface water: {plan?.properties?.surface_water}</li>
							</ul>
						</div>
					</div>
			<Link to="/planets">
				<button className="btn btn-primary d-grid p-2 my-2 mb-3 mx-auto">
					Back to Home
				</button>
			</Link>
				</div>
			</div>
			)
		</>
	);
};
