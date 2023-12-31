import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import people from "../../img/people.png";
import dead from "../../img/dead.png";
import globe from "../../img/globe.png";
import { toast } from "react-toastify";

//falta arreglar el responsive del navbar. los iconos y el boton desaparecen al verse desde el movil
// Refactorizar

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { addFavorite } = actions;
  const size = store?.favorites?.length;

  size >= 1 ? toast.success(`You have ${size}  favorite ♥  `) : ('')
  
  
  return (
    <nav className="navbar sticky-top  navbar-expand-lg navbar-dark  bg-black ">
        <div className="container d-flex justify-content-start  ">
      <Link to="/" className="navbar-brand p-2 ">
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
          height="50px"
          width="150px"
        />
      </Link>
        <ul className=" nav ">
          <li className="nav-item">
            <Link to="/" className="fs-5 p-3 mb-2 my-2">
              Characters <img src={people} height="22px" width="22px" />
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/planets" className="fs-5 p-3 mb-2 my-2">
              Planets <img src={globe} height="22px" width="22px" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="fs-5 p-3 mb-2 my-2">
              Starships <img src={dead} height="22px" width="22px" />
            </Link>
          </li>
        <div className=" justify-content-end ">
          <div className="dropdown">
            {" "}
            <button
              onChange={() => addFavorite(id)}
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="false"
              >
              {" "}
              {size > 1 ? "Your Favorites" : " Your Favorites"} | {size}{" "}
              {size ? "♥" : "♡"}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
              >
              {" "}
              <li>
                <a className="dropdown-item">Add Something!</a>
              </li>
              {store.favorites?.map((favorite, index) => {
                return (
                  <i
                  className="fas fa-trash"
                  key={index}
                  onClick={() => actions.removeFavorite(favorite)}
                  >
                    {favorite.properties.name}
                  </i>
                );
              })}
            </ul>
          </div>
        </div>
              </ul>
      </div>
    </nav>
  );
};
