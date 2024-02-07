'use client'
import { useState } from "react";


export default function FormCategory() {
    const [nombre, setNombre] = useState([]);
    const [detalle, setDetalle] = useState([]);
    
    async function CargarDato (){
        const params={
            "Nombre":nombre,
            "Detalle":detalle
        }
        console.log(params)

        const res= await fetch('/api/tasks',{
            method:'POST',
            body:JSON.stringify({nombre,detalle}),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
  return (
    <div>
      <div className="h-screen justify-center items-center">
      <h1>Crear Categoria</h1>
      <div className=" p-5">
        <div className="textPublic">
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={nombre} onChange={(e) => {setNombre(e.target.value); }} placeholder="Nombre"/>
        <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full"value={detalle} onChange={(e) => {setDetalle(e.target.value);}} placeholder="Detalle"></textarea>
        </div>
        <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" onClick={CargarDato} >Cargar</button>
      </div>
    </div>
    </div>
  )
}
