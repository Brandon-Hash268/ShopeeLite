import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { handlError, HttpError } from "./lib/error";

export function middleware(request:NextRequest) {
    try {
        
        const authCookies = cookies().get("Authorization")
        console.log(authCookies);
        
        if (!authCookies) {
            throw new HttpError("Please Log in first",401)
        }
    } catch (error) {
        return handlError(error)
    }
}

export const config= {
    matcher:[
        '/apis/wishlists'
    ]
}