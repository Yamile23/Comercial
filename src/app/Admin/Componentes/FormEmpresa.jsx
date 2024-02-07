'use client'
import Image from "next/image";
import { useState } from "react";


export default function FormEmpresa() {
    const [file, setFile]= useState();
    const [logo, setlogo]= useState("");
    const [nombre, setNombre] = useState([]);
    const [detalle, setDetalle] = useState([]);
    const[link,setlink]=useState([]);

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
      setlogo(data.path)
      }catch(error){
          console.log(error);
      }
  }

  async function CargarDato (){
    let path = '/img/'
    path += file.name;
    console.log(path)
    const params={
        "Nombre":nombre,
        "link":link,
        "logo": path,
        "Detalle":detalle
    }
    console.log(params)
    console.log(file)
    debugger
    const res= await fetch('/api/empresas',{
        method:'POST',
        body:JSON.stringify({nombre,link,path,detalle}),
        headers:{
            'Content-Type':'application/json'
        }
    })
}
  return (
    <div>
      <div>
      <div className="h-screen justify-center items-center">
      <h1>Crear Empresa</h1>
      <div className=" p-5">
      
      <form  onSubmit={handleSumit }>
        <div className="textPublic">
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full" value={nombre} onChange={(e) => {setNombre(e.target.value); }} placeholder="Nombre"/>
        <input type="text" className="border border-gray-400 p-2 mb-4 w-full"value={link} onChange={(e) => {setlink(e.target.value); }} placeholder="Enlace"/>
        <textarea rows="3" className="border border-gray-400 p-2 mb-4 w-full" value={detalle} onChange={(e) => {setDetalle(e.target.value); }} placeholder="Detalle"></textarea>

        <div className="loadlogo">
        <label>Cargar Logo: </label>
        <input className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2" type="file" onChange={(e)=>{ setFile(e.target.files[0]);}}/>
        </div>
        </div>
        <button className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" disabled={!file} onClick={CargarDato}>Cargar</button>
        </form>
      <div className="flex">
      {file &&(
        <Image src={URL.createObjectURL(file)}
        alt="upload file" className="w-64 h-64 object-cover mx-auto" width={256} height={256}/>
      )}
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
