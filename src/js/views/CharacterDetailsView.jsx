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
			<div className="container-fluid border-0 my-4">
				<div className="row">

					<div className="col-4 align-self-center">
						<div className="card ">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${char?.uid}.jpg`} />
						</div>
						<div className="col">
							<div className="card">
								<div className="card-body">

									<h5 className="card-title p-2"> Character: {char?.properties?.name} </h5>
									<ul>
										<li className="card-text ">Height: {char?.properties?.height} </li>
										<li className="card-text ">Mass: {char?.properties?.mass} </li>
										<li className="card-text ">Hair color: {char?.properties?.hair_color} </li>
										<li className="card-text ">Skin color: {char?.properties?.skin_color}</li>
										<li className="card-text ">Eye color: {char?.properties?.eye_color}</li>
										<li className="card-text ">Birth year: {char?.properties?.birth_year}</li>
										<li className="card-text ">Gender: {char?.properties?.gender}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary d-grid p-2 my-2 mb-3 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
