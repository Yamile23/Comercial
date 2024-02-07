'use client'

import Image from "next/image";
import { useEffect, useState } from "react"

export default function FormPublic() {
    const [file, setFile]= useState();
    const [file2, setFile2]= useState();
    const [file3, setFile3]= useState();
    const [ListaCateogria, setListaCateogria] = useState([]);
    const [ListaEmpresa, setListaEmpresa] = useState([]);
    const [EsPromo, setEsPromo] = useState([]);
    
    useEffect(() => {
        const getTodos = async () => {
            getCategoria();
            getEmpresa();
        };
        getTodos();
    }, []);

async function getEmpresa(){
  const res = await fetch('http://localhost:3000/api/empresas', { cache: 'no-store' })
  const data = await res.json() 
  setListaEmpresa(data)
}

async function getCategoria(){
  const res = await fetch('http://localhost:3000/api/tasks', { cache: 'no-store' })
            const data = await res.json()
            setListaCateogria(data)
}
const handleSumit=async(e)=>{e.preventDefault()
    if(!file)return
    
    const form = new FormData()
    form.set('file',file)
   try{
    const res= await fetch('/api/upload',{
        method:"POST",
        body:form,
    });
    if(res.ok){
        console.log("file uploaded")
    }
    const data = await res.json()
    console.log(data);
    }catch(error){
        console.log(error);
    }
}
  return (
    <div className="h-screen justify-center items-center">
      <h1>Crear Publicidad</h1>
      <div className=" p-5">
      <form  onSubmit={handleSumit }>

        <div className="textPublic">
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full" placeholder="Titulo"/>
        <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full"placeholder="Detalle"></textarea>
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full" placeholder="Enlace"/>
        <label>Fecha de inicio de Publicidad</label>
        <input type="date" className="border border-gray-400 p-2 mb-4 w-full" placeholder="Inicio"/>
        <label>Fecha de finalizacion de Publicidad</label>
        <input type="date" className="border border-gray-400 p-2 mb-4 w-full" placeholder="Inicio"/>
        </div>

        <div className="flex">
        <div className="selectpromocion mr-5">
        <label>Tiene : </label>
        <select  value={EsPromo} onChange={(e) => {setEsPromo(e.currentTarget.value);}}>
          <option selected value="" disabled>¿Promocion?</option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
        </div>

        <div className="selectCategoria mr-10">
        <label>Categoria : </label>
        <select value={ListaCateogria} onChange={(e) => {setListaCateogria(e.currentTarget.value); }}>
          <option  selected value="">Categoria</option>
          {ListaCateogria.map(item =>
                        <option value={item.id}>
                            {item.nombre}
                        </option>
                    )}
        </select>
        </div>

        <div className="selectEmpresa mr-10">
        <label>Empresa : </label>
        <select value={ListaEmpresa} onChange={(e) => {setListaEmpresa(e.currentTarget.value); }}>
          <option value="" selected>Empresa</option>
          {ListaEmpresa.map(item =>
                        <option value={item.id}>
                            {item.nombre}
                        </option>
                    )}
        </select>
        </div>
        </div>

        <div className="loadFile">
        <label>Cargar Arte: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file" onChange={(e)=>{ setFile(e.target.files[0]);}}/>
        <label>Cargar Catalogo: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file"  onChange={(e)=>{ setFile2(e.target.files[0]);}}/>
        <label>Cargar Galeria: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file"  onChange={(e)=>{ setFile3(e.target.files[0]);}}/>
        </div>

        <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file}>Cargar</button>
      </form>
      <div className="flex">
      {file &&(
        <Image src={URL.createObjectURL(file)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      {file2 &&(
        <Image src={URL.createObjectURL(file2)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      {file3 &&(
        <Image src={URL.createObjectURL(file3)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      </div>
      </div>
    </div>
  )
}
