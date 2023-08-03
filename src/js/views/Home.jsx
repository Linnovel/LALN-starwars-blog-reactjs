import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store} = useContext(Context)

	return (

		<div className="text-center mt-5">
		<h1>Personajes</h1>
		<div>Carrusel de tarjetas</div>
		<div className="row">
			{store.people.map((character) => {
				const properties = character.properties;
				return (
					<div className="col-12 col-md-6 col-lg-4 p-2" key={character._id}>
			<div className="card  m-3" >
				<img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{properties.name}</h5>
					<p className="card-text">Eyes Color :{properties.eye_color}</p>
					<div className="d-flex justify-content-between align-items-center">
					<a href="#" className="btn btn-outline-primary">Favoritos</a>
					<a href="#" className="btn btn-primary">Details</a>
						</div> 
				</div>
			</div>
			</div>
				)
	})}
		</div>
	</div>
		) 
};
