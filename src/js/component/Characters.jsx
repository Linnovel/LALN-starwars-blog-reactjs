import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export function Characters({ character, addFavorite }) {
  const {store, actions} = useContext(Context)
  const { _id: id,properties } = character;
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3">
        <img
          src="https://picsum.photos/100/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-dark bg-light">
          <h5 className="card-title">{properties.name}</h5>
          <p className="card-text">Height :{properties.height}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a onClick={() => actions.addFavorite(id)} href="#" className="btn btn-outline-primary"
            >
              Favorites
            </a>
            <Link className="btn btn-primary" to={`/CharacterDetailsView/${id}`} onClick={() => actions.loadDataFromPeople(result.url)}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}