import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Starwars2 from "../../img/starwars2.jpg";


export const StartShipDetailsView = () => {
	const { store } = useContext(Context);
	const { startShip, setStartShip } = useState(null)
	const params = useParams();
	const maket = params.id.replace('hack', "/")

	useEffect(() => {
		async function getIndividualShip(id) {
			const response = await fetch(`https://www.swapi.tech/api/${id}`);
			const data = await response.json()
			setStartShip(data?.result)
		}

		getIndividualShip(maket)
	}, [params])
	//aqui intente hacer lo mismo que en characterdetail pero algo debo estar haciendo mal, obvimente

	return (
		<>	<div className="container border-0" >
			<div className="card mb-3 border-0">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={Starwars2} className="img-fluid" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> Vehicles : {startShip?.properties.name}</h5>
							<ul>
								<li className="card-text col-md-8">model: {startShip?.properties.model} </li>
								<li className="card-text col-md-8">starship_class: </li>
								<li className="card-text col-md-8">manufacturer: </li>
								<li className="card-text col-md-8">cost_in_credits: </li>
								<li className="card-text col-md-8">length: </li>
								<li className="card-text col-md-8">crew: </li>
								<li className="card-text col-md-8">passengers: </li>
								<li className="card-text col-md-8">MGLT: </li>
								<li className="card-text col-md-8">cargo_capacity: </li>
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
