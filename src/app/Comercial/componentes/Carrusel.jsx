import React from 'react'
export default function Carrusel() {
  return (
    
    <section>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-innerImg">
          <div class="carousel-item active">
            <img src="/img/modelo3.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>El regalo perfecto</h5>
              <p>Descrubre las increibles ofertas y descuentos exclusivos para encontrar el reglao ideal!</p>
              <button class="btn btn-primary" type="submit">Registrate Gratis</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/modelo1.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Black friday</h5>
              <p>Descuentos exclusivos, encontraras todo para ti y tu familia</p>
              <button class="btn btn-primary" type="submit">Registrate Gratis</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/modelo2.png" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>El regalo perfecto</h5>
              <p>Descrubre las increibles ofertas y descuentos exclusivos para encontrar el reglao ideal!</p>
              <button class="btn btn-primary" type="submit">Registrate Gratis</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    
  );
}
