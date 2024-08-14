"use server";
import Image from "next/image";
import logo from "../../../public/profile.jpg";
import Link from "next/link";
import Login from "../Modal/Login";
import { cookies } from "next/headers";
import Logout from "./Logout";

export default async function Header() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("token");

  

  return (
    <header className="px-[150px] flex justify-between items-center py-4">
      <div className="flex items-center">
        <Image src={logo} width={50} height={50} alt="logo" className="mr-4" />
        <nav>
          <ul className="flex items-center border border-[#68847c] rounded-full p-2">
            <li className="mr-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-full bg-[#68847c] text-white"
              >
                Home
              </Link>
            </li>
            <li className="mr-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-[#68847c]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-4 py-2 rounded-full text-[#68847c]"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>{cookie ? <Logout /> : <Login />}</div>
    </header>
  );
}
