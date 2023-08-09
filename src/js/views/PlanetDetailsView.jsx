import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planets from "../../img/planets.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



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
			<div className="container border-0" >
				<div className="card mb-3 border-0">
					<div className="col-md-4">
						<img src={planets} className="d-flex" width="1116" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Name {plan?.properties?.name}</h5>
							<ul>
								<li className="card-text col-md-8">Diameter: {plan?.properties.diameter}</li>
								<li className="card-text col-md-8">Rotation period: {plan?.properties.rotation_period}</li>
								<li className="card-text col-md-8">Orbital period {plan?.properties.orbital_period}</li>
								<li className="card-text col-md-8">Gravity {plan?.properties?.gravity}</li>
								<li className="card-text col-md-8">Population: {plan?.properties?.population}</li>
								<li className="card-text col-md-8">Climate: {plan?.properties?.climate}</li>
								<li className="card-text col-md-8">Terrain: {plan?.properties?.terrain}</li>
								<li className="card-text col-md-8">Surface water: {plan?.properties?.surface_water}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			)
			<Link to="/planets">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
