import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import people from "../../img/people.png";
import dead from "../../img/dead.png";
import globe from "../../img/globe.png";

//falta arreglar el responsive del navbar. los iconos y el boton desaparecen al verse desde el movil
// Refactorizar 

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { addFavorite } = actions;
  const size = store?.favorites?.length;

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black ">
      <Link to="/" className="navbar-brand d-flex justify-content-flex-start">
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
          height="50"
          width="150" />
      </Link>
      <div className="container-fluid">

        <ul className="navbar-nav navbar-expand-lg nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Characters <img src={people} height="25" width="25" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">
              Planets <img src={globe} height="25" width="25" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">
              Starships <img src={dead} height="25" width="25" />
            </Link>
          </li>
        </ul>
        <div className="d-flex justify-content-flex-end ms-auto">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://github.com/Linnovel"><img src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" height="25" width="25" /></a>
            </li>
          </ul>
          <div className="dropdown"> <button onChange={() => addFavorite(id)} className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false" > {size > 1 ? "Favorites" : "Favorite"} | {size}  <i className="far fa-heart"></i></button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1"> <li><a className="dropdown-item" >Add Something!</a></li>
              {store.favorites?.map((favorite) => {
                return (<i className="fas fa-trash" key={favorite} onClick={() => actions.removeFavorite(favorite)}>{favorite.properties.name}</i>);
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  );
};
