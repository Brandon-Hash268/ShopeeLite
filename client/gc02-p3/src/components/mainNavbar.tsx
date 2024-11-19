import Image from "next/image";
import logo from "../app/images/1656181621shopee-logo-white.png";
import Link from "next/link";
export function MainNavbar() {
  return (
    <div className="navbar bg-shopee">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={logo} alt="logo" width={130} />
        </Link>
        <Link href="/products" className="text-white pt-3 font-medium">
          Products
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full justify-center content-center">
              <i className="fa-solid fa-ellipsis-vertical text-white"></i>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/wishlist">Whish list</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
