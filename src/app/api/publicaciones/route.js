import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const publicacion = await prisma.publicacion.findMany()
    console.log(publicacion)
    return NextResponse.json(publicacion)
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    const newPublic= await prisma.publicacion.create({
        data:{
            titulo:data.titulo,
            detalle:data.detalle,
            arte:data.arte,
            link:data.link,
            finalpublic:data.finalpublic,
            catalogo:data.catalogo,
            galeria:data.galeria,
            tipo:data.tipo,
            id_category:data.id_category,
            id_empresa:data.id_empresa
        },
    });
    return NextResponse.json(newPublic)
}