import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { addFavorite } = actions;
  const size = store?.favorites?.length;

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ">
          <img
            className="img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            height="50"
            width="150"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/starships" className="nav-link">
                Starships
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <div className="dropdown">

              <button
                onChange={() => addFavorite(id)}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >

                {size > 1 ? "Favorites" : "Favorite"} | {size}

              </button>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"

              >

                {store.favorites?.map((favorite) => {
                  return (
                    <i
                      className="fas fa-trash"
                      key={favorite}
                      onClick={() => actions.removeFavorite(favorite)}
                    >
                      {favorite}

                    </i>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
