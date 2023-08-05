import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/star-wars-logo.jpg";
import { useParams } from "react-router-dom";


export const CharacterDetailsView = ({  }) => {
	const { store } = useContext(Context);
	const [char,setChar]=useState(null)
	
	const params = useParams();
	const formatted = params.id.replace('hack',"/")

	useEffect(()=>{
		async function getIndividualCharacter(id){
			const value = await fetch(`https://www.swapi.tech/api/${id}`)
			const response = await value.json()
			setChar(response?.result)
		}

		getIndividualCharacter(formatted)
	},[params])
	// const descriptionView = store.people.find((detail) => params._id === detail._id )
	

	return (
		<>
			<div className="container border-0">
				<div className="card mb-3 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={starwars} className="img-fluid" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title"> </h5>
								<ul>
									<li className="card-text col-md-8">Height:{char?.properties?.height} </li>
									<li className="card-text col-md-8">Mass:{char?.properties?.mass} </li>
									<li className="card-text col-md-8">Hair_color:{char?.properties?.hair_color} </li>
									<li className="card-text col-md-8">Skin_color: </li>
									<li className="card-text col-md-8">Eye_color: </li>
									<li className="card-text col-md-8">Birth_year: </li>
									<li className="card-text col-md-8">Gender: </li>
								</ul>
							</div>
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