import React from 'react'

export default function galeryCatag() {
  return (
    <div>
      <section className="categoria">
        <div className="categoria-item">
          <img src="/img/juego.png" alt="..."/>
          <p><a href="#">Juegos y Juguetes</a></p>
        </div>
        <div className="categoria-item">
          <img src="/img/computo.png" alt="..."/>
          <p><a href="#">Computo y Tables</a></p>
        </div>
        <div className="categoria-item">
          <img src="/img/celulares.png" alt="..."/>
          <p><a href="#">Celulares y Accesorios</a></p>
        </div>
        <div className="categoria-item">
          <img src="/img/hogar.png" alt="..."/>
          <p><a href="#">Hogar y Cocina</a></p>
        </div>
        <div className="categoria-item">
          <img src="/img/salud.png" alt="..."/>
          <p><a href="#">Salud y Belleza</a></p>
        </div>
      </section>
    </div>
  )
}
