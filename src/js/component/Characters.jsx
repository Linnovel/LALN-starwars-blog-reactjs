import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

// Refactorizar 

export function Characters({ character }) {
  const { store, actions } = useContext(Context)
  const { _id: id, properties, uid } = character;
  const value = properties?.url?.match(/people/g).join()

  function handleClick(e, id) {
    e.preventDefault()
    actions.addFavorite(id, "people")

  }

  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
        <div className="card-body text-white bg-dark">
          <h5 className="card-title"> Name: {properties.name}</h5>
          <p className="card-text">Height: {properties.height}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a onClick={(e) => handleClick(e, id)} href="#" className="btn btn btn-light"> Favorites <i className="fas fa-heart"></i></a>
            <Link className="btn btn-success" to={`/CharacterDetailsView/${id}`} > Details </Link>
          </div>
        </div>
      </div>
    </div>
  );
}