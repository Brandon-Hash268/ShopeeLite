import Image from "next/image";
import Link from "next/link";
import logo from "@/images/1656181621shopee-logo-white.png";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("Authorization");
  console.log(token);

  return (
    <>
      <div className="navbar bg-shopee">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        <div className="flex-1 justify-between content-center">
          <div>
            <Link href="/" className="btn btn-ghost text-xl">
              <Image src={logo} alt="logo" width={130} />
            </Link>
          </div>
          <div className="gap-3 flex pr-[90px]">
            <div>
              <Link href="/products" className="text-white pt-3 font-medium">
                Products
              </Link>
            </div>
            <div>
              <Link href="/wishlist" className="text-white pt-3 font-medium">
                Wishlist
              </Link>
            </div>
          </div>
          {token ? (
            <div className="flex justify-center content-center gap-1">
              <form
                action={async () => {
                  "use server";
                  console.log("aaaa");

                  cookies().delete("Authorization");
                  redirect("/login");
                }}
              >
                <button type="submit" className="text-white font-medium">
                  Logout
                </button>
              </form>
              <i className="fa-solid fa-right-from-bracket pt-[5px] text-white"></i>
            </div>
          ) : (
            <div className="flex justify-center content-center gap-1">
              <div>
                <Link className="text-white  font-medium " href="/login">
                  Login
                </Link>
              </div>
              <i className="fa-solid fa-right-from-bracket pt-[5px] text-white"></i>
            </div>
          )}
        </div>
      </div>
      {children}
    </>
  );
}
