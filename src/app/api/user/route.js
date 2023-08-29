import { NextResponse } from "next/server";
import {headers} from 'next/headers'


export async function GET(req, res) {
    const {searchParams} = new URL(req.url)
    let id = searchParams.get('id')
    return NextResponse.json({msg: id})

    
   
}

export async function POST(req, res) {
    // const data = await req.json()
    // return NextResponse.json({
        
    //     data
    // })

    const headerList = headers()
    const token =  headerList.get('token') 

    return NextResponse.json({msg: token})

//     const theme = req.cookies.get('Theme')

//    return NextResponse.json({theme})

}