import { data } from "@/libs/db";
import { NextResponse } from "next/server"

export const GET=async()=>{
    return NextResponse.json({data:data},
        {status:200}
    )
}

export const PUT= async(request:Request)=>{
    const dataList= await request.json();
    console.log(dataList)
    return NextResponse.json({data:data},
        {status:200}
    )
}