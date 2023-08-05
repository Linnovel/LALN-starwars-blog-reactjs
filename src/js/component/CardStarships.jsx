import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';


export function  CardStarships ({vehiculo})  {
  const { store, actions } = useContext(Context);
  const { _id: id,properties } = vehiculo;
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="card  m-3">
        <img
          src="https://picsum.photos/100/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Name {properties.name}</h5>
          <p className="card-text">Class :{properties.model}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="btn btn-outline-primary"
            >
              Favorites
            </a>
            <Link className="btn btn-primary" to={`/StartShipDetailsView/${id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

