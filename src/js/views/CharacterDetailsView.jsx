import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import darthvader from "../../img/darthvader.jpg";
import { useParams } from "react-router-dom";
// Refactorizar 
export const CharacterDetailsView = ({ }) => {
	const { store } = useContext(Context);
	const [char, setChar] = useState(null)
	const params = useParams();
	const formatted = params.id.replace('hack', "/")

	useEffect(() => {
		const character = store.people.find((item) => params.id === item._id)
		setChar(character)
	}, [store.people, params])

	return (
		<>
			<div className="container border-0">
				<div className="card mb-3 border-0">
					<div className="col-md-4">
						<img src={darthvader} className="d-flex" width="1116" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> Character: {char?.properties?.name} </h5>
							<ul>
								<li className="card-text col-md-8">Height: {char?.properties?.height} </li>
								<li className="card-text col-md-8">Mass: {char?.properties?.mass} </li>
								<li className="card-text col-md-8">Hair color: {char?.properties?.hair_color} </li>
								<li className="card-text col-md-8">Skin color: {char?.properties?.skin_color}</li>
								<li className="card-text col-md-8">Eye color: {char?.properties?.eye_color}</li>
								<li className="card-text col-md-8">Birth year: {char?.properties?.birth_year}</li>
								<li className="card-text col-md-8">Gender: {char?.properties?.gender}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
