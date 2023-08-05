import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";



export const PlanetDetailsView = ( ) => {
	const { store, actions } = useContext(Context)
	
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
											<h5 className="card-title"></h5>
											<ul>
												<li className="card-text col-md-8">Diameter: </li>
												<li className="card-text col-md-8">Potation_period: </li>
												<li className="card-text col-md-8">Orbital_period </li>
												<li className="card-text col-md-8">Gravity </li>
												<li className="card-text col-md-8">Population: </li>
												<li className="card-text col-md-8">Climate:</li>
												<li className="card-text col-md-8">Terrain: </li>
												<li className="card-text col-md-8">Surface_water: </li>
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
