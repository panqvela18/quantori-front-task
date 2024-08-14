"use client";
import Link from "next/link";
import { useState } from "react";
import burgerMenu from "../../../../public/burger.svg";
import Image from "next/image";
import Login from "../../Modal/Login";
import Logout from "../Logout";

export default function MobileHeader({ cookie }: { cookie: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="border-2 border-[#68847c] p-2 rounded-xl hidden max-lg:block"
      >
        <Image src={burgerMenu} width={30} height={30} alt="burger-menu" />
      </button>
      {isOpen && (
        <div className="min-h-dvh absolute top-[82px] right-0 w-screen bg-[#68847c]">
          <div className="h-[3px] w-full bg-white mt-3"></div>
          <nav className="flex flex-col items-center">
            <Link
              onClick={() => setIsOpen(false)}
              href={"/"}
              className="text-white text-sm p-6 border-b-[3px] w-full flex justify-center hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href={"/contact"}
              className="text-white font text-sm p-6 border-b-[3px] w-full flex justify-center hover:text-gray-200"
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href={"/about"}
              className="text-white text-sm p-6 border-b-[3px] w-full flex justify-center hover:text-gray-200"
            >
              About
            </Link>
            {cookie ? <Logout /> : <Login />}
          </nav>
        </div>
      )}
    </div>
  );
}
