import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";
import { Context } from "../store/appContext";


export const StartShipDetailsView = () => {
	const { store } = useContext(Context);
	return (
		<>	<div className="container border-0" >
							<div className="card mb-3 border-0">
								<div className="row g-0">
									<div className="col-md-4">
										<img src={starwars} className="img-fluid" alt="..." />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title"></h5>
											<ul>
												<li className="card-text col-md-8">model: </li>
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
