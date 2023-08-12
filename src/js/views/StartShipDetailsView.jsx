import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Starwars1 from "../../img/starwars1.jpg";


export const StartShipDetailsView = () => {
	const { store } = useContext(Context);
	const [startShip, setStartShip] = useState(null)
	const params = useParams();
	const maket = params.id.replace('ship', "/")

	useEffect(() => {
		const vehicles = store.vehicles.find((ship) => params.id === ship._id)
		setStartShip(vehicles)
	}, [store.vehicles, params])

// Refactorizar 
	return (
		<>
			<div className="container border-0 d-flex justify-content-center" >
				<div className="card mb-3 border-0">
					<div className="col-md-4">
						<img src={Starwars1} className="d-flex" height="580" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> Vehicles : {startShip?.properties.name}</h5>
							<ul>
								<li className="card-text col-md-8">Model: {startShip?.properties.model} </li>
								<li className="card-text col-md-8">Starship Class: {startShip?.properties.startship_class}</li>
								<li className="card-text col-md-8">Manufacturer: {startShip?.properties.manufacturer}</li>
								<li className="card-text col-md-8">Cost in Credits: {startShip?.properties.cost_in_credits}</li>
								<li className="card-text col-md-8">Length: {startShip?.properties.length}</li>
								<li className="card-text col-md-8">Crew: {startShip?.properties.crew}</li>
								<li className="card-text col-md-8">Passengers: {startShip?.properties.passengers}</li>
								<li className="card-text col-md-8">MGLT: {startShip?.properties.mglt}</li>
								<li className="card-text col-md-8">Cargo Capacity: {startShip?.properties.cargo_capacity}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Link to="/starships">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
