import React from "react";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/100px-Star_Wars_Logo.svg.png" />

    </a>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   Favorites 0
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item active" href="#">Liked</a></li>
   
  </ul>
</div>
  </div>
</nav>
	);
};
