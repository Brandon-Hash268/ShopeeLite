import Image from "next/image";
import Link from "next/link";
import logo from "@/images/image.png";
import { Protected } from "@/components/protected";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Protected>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src={logo}
              alt="logo"
              width={130}
              style={{ background: "none" }}
            />
          </Link>
        </div>
      </div>

      {children}
    </Protected>
  );
}
