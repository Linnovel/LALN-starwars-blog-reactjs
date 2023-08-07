import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/Carousel.jsx";
import { Characters } from "../component/Characters.jsx";



export const Home = () => {
	const { store, actions } = useContext(Context)
	const { addFavorite } = actions;

	return (
		<>
			<div className="container-sm 960">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<Carousel />
						</div>
					</div>
				</div>
				<div className="row">
					{store.people.map(character => {
						return (
							<Characters
								character={character}
								key={character._id}
								addFavorite={addFavorite}
							/>
						);
					})}
				</div>

			</div>
		</>
	)
};
