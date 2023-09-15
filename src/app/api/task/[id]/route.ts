import { NextResponse, NextRequest } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(request: NextRequest, {params}: any){
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}
export async function PUT(request: NextRequest, {params}: any){
    const data = await request.json()
    const taskEdit = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(taskEdit)
}

export async function DELETE(request: NextRequest, {params}: any){
    try {
        const deleteTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json("Task remove")
    } catch (error: unknown) {
        return NextResponse.json({error: "An error occurred while deleting the task", details: Error})
    }
   
}

