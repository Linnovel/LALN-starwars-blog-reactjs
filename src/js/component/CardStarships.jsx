import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';

// Refactorizar 

export function CardStarships({ vehiculo }) {
  const { store, actions } = useContext(Context);
  const { _id: id, properties, uid } = vehiculo;
  const value = properties?.url?.match(/vehicles/g).join()

  function handleClick(e, id) {
    e.preventDefault()
    actions.addFavorite(id, "vehicles")
  }
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`} />
        <div className="card-body text-white bg-dark">
          <h5 className="card-title">Name: {properties.name}</h5>
          <p className="card-text">Class: {properties.model}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="btn btn-light" onClick={(e) => handleClick(e, id)}> Like this post </a>
            <Link className="btn btn-success" to={`/StartShipDetailsView/${id}`} >More Details </Link> </div>
        </div>
      </div>
    </div>
  );
}

