import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const PlanetDetailsView = () => {
	const { store } = useContext(Context)
	const [plan, setPlan] = useState(null)

	const params = useParams();
	const formatted = params.id.replace('hack', "/")

	useEffect(() => {
		async function getIndividualPlanets(id) {
			const response = await fetch(`https://www.swapi.tech/api/${id}`)
			const data = await response.json()
			setPlan(data?.result)
		}

		getIndividualPlanets(formatted)
	}, [params])

	return (
		<>
			<div className="container border-0" >
				<div className="card mb-3 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={starwars} className="img-fluid" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{plan?.properties?.name}</h5>
								<ul>
									<li className="card-text col-md-8">Diameter: {plan?.properties.diameter}</li>
									<li className="card-text col-md-8">Rotation period: {plan?.properties.rotation_period}</li>
									<li className="card-text col-md-8">Orbital period {plan?.properties.orbital_period}</li>
									<li className="card-text col-md-8">Gravity {plan?.properties?.gravity}</li>
									<li className="card-text col-md-8">Population: {plan?.properties?.population}</li>
									<li className="card-text col-md-8">Climate: {plan?.properties?.climate}</li>
									<li className="card-text col-md-8">Terrain: {plan?.properties?.terrain}</li>
									<li className="card-text col-md-8">Surface_water: {plan?.properties?.surface_water}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
			<Link to="/">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
