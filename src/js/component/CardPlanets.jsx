import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';


export function CardPlanets({ planeta }) {
  const { store, actions } = useContext(Context);
  const { _id: id, properties, uid } = planeta;
  const value = properties?.url?.match(/planets/g).join()

  function handleClick(e, id) {
    e.preventDefault()
    actions.addFavorite(id)
  }
  //ya hice los cambios y ya puedo agregar a favoritos cualquier carta que eliga 


  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3 ">
        <img
          src="https://picsum.photos/100/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title">Name: {properties.name}</h5>
          <p className="card-text">Population: {properties.population}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a onClick={(e) => handleClick(e, id)} href="#" className="btn btn-outline-primary"
            >
              Favorites
            </a>
            <Link className="btn btn-primary" to={`/PlanetDetailsView/${value}plan${uid}`} onClick={() => actions.loadDataFromPeople(result.url)} >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





