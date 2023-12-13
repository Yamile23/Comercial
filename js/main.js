const items =document.getElementById('items')
const templatecard=document.getElementById('template-card').content 
const fragment =document.createDocumentFragment()

document.addEventListener('DOMContentLoaded',()=>{
	fetchData()
})


const fetchData = async ()=> {
	try{
		debugger;
		const res = await fetch("./js/api.json")
		const data = await res.json()
		console.log(data)
		pintarCards(data)
	}catch(error){
		console.log(error)
	}
}

const pintarCards=data =>{
	data.forEach(comercio => {

		var fechaInicio = new Date(comercio.publicacion).getTime();
		var fechaFin    = new Date(comercio.finalizacion).getTime();
		var diff = fechaFin - fechaInicio;

		templatecard.querySelector('h5').textContent=comercio.titulo
		templatecard.querySelector('#detalle').textContent=comercio.detalle
		templatecard.querySelector('#publitext').textContent=comercio.publicacion
		templatecard.querySelector('img').setAttribute("src",comercio.imagen)
		templatecard.querySelector('#promo').textContent="Finaliza en "+diff/(1000*60*60*24)+" dias"
		templatecard.querySelector('#btnpublic').setAttribute("href",comercio.link)
		const clone = templatecard.cloneNode(true)
		fragment.appendChild(clone)
	})
	items.appendChild(fragment)
}





/*----------------------------------------------------------------------*/



const itemstienda =document.getElementById('itemstienda')
const templatetienda=document.getElementById('template-tienda').content 
const fragments =document.createDocumentFragment()

document.addEventListener('DOMContentLoaded',()=>{
	fetchDataTienda()
})


const fetchDataTienda = async ()=> {
	try{
		debugger;
		const res = await fetch("./js/tienda.json")
		const data = await res.json()
		console.log(data)
		pintartienda(data)
	}catch(error){
		console.log(error)
	}
}
const pintartienda=data =>{
	data.forEach(tienda => {
		templatetienda.querySelector('a').setAttribute("href",tienda.link)
		templatetienda.querySelector('img').setAttribute("src",tienda.imagen)
		const clone = templatetienda.cloneNode(true)
		fragments.appendChild(clone)
	})
	itemstienda.appendChild(fragments)
}


















