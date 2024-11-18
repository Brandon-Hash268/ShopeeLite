import Image from "next/image";
import banner from "../app/images/shopeeBanner.jpg"


export function Banner() {
    return(
        <>
        <Image src={banner} alt="banner" width={1000}/>
        </>
    )
}