import React from "react";
import Starwars2 from "../../img/starwars2.jpg";
import Starwars4 from "../../img/starwars4.jpg";
import Starwars5 from "../../img/starwars5.jpg";
import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1500">
            <Link to={"/"}>
              <img src={Starwars4} className="d-block w-100" />
            </Link>
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Characters</h5>
              <p className="text-warning">Protagonist from the movie Start Wars</p> </div> </div>
          <div className="carousel-item">
            <Link to={"/planets"}>
              <img src={Starwars5} className="d-block w-100" />
            </Link>
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Planets</h5>
              <p className="text-warning">Planets across the Galaxy</p> </div> </div>
          <div className="carousel-item">
            <Link to={"/starships"}> <img src={Starwars2} className="d-block w-100" /></Link>
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-warning">Star Ships</h5>
              <p className="text-warning">Star Ships of the Galaxy</p>
            </div> </div> </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span> </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span> </button>
      </div>
    </>
  );
}