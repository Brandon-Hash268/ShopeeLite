import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { handlError, HttpError } from "./lib/error";
import * as jose from "jose"

export async function middleware(request:NextRequest) {
    try {
        
        const authCookies = cookies().get("Authorization")
        // console.log(authCookies);
        
        if (!authCookies) {
            throw new HttpError("Please Log in first",401)
        }

        const [type,token] = authCookies.value.split(" ")
        if (type !== "Bearer"||!token) {
            throw new HttpError("Invalid Token",401)
        }

        const secret = new TextEncoder().encode(process.env.JWT_SECRET as string)
        const {payload}= await jose.jwtVerify<{id:string}>(token,secret)

        console.log(payload,"payloadddddddd");
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set("x-user-id",payload.id)
        
        return NextResponse.next({
            request:{
                headers:requestHeaders
            }
        })

    } catch (error) {
        return handlError(error)
    }
}

export const config= {
    matcher:[
        '/apis/wishlists'
    ]
}