import { NextResponse } from "next/server";
import {prisma} from '@/app/libs/prisma'

export async function GET(){
    const tasks = await prisma.task.findMany()
    console.log(tasks)
    return NextResponse.json(tasks)
}

export async function POST(request){
    const {nombre,detalle} = await request.json()
    console.log(nombre,detalle)
    const newTask= await prisma.task.create({
        data:{
            nombre:nombre,
            detalle:detalle
        },
    });
    return NextResponse.json(newTask)
}

