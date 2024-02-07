
async function loadEmpren() {

  const res = await fetch('http://localhost:3000/api/empresas')
  const data = await res.json()
  return data
}

async function cuponera() {
  const empren = await loadEmpren();

  return (
    <div class="derecha">
          <div class="cuponera">
            <h3>Cuponera</h3>
            <p>Recibelas en tu correo.</p>
            <button class="btn btn-primary" type="submit">Yo quiero!</button>
            <img src="/img/Cuponera.png" alt="..."/>
          </div>
          
          <div class="tiendas">
            <img src="img/logotienda.png" class="logotienda" alt="..."/>
            {empren.map((empren) => (
            <div id="template-tienda">
            <div class="col-12 mb-2 col-md-4">
              <div class="card">
                <a href=""><img src={empren.logo} alt="" class="card-img-top"/></a>
              </div>
            </div>
          </div>
            ))}
          </div>
        </div>
  )
}
export default cuponera;