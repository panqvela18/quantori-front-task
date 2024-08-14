"use server";
import Image from "next/image";
import logo from "../../../public/profile.jpg";
import Login from "../Modal/Login";
import { cookies } from "next/headers";
import Logout from "./Logout";
import Navigation from "./Navigation/Navigation";
import MobileHeader from "./MobileHeader/MobileHeader";

export default async function Header() {
  const cookieStore = cookies();
  const cookie = cookieStore?.get("token");

  return (
    <header className="px-[150px] flex justify-between items-center py-4 max-lg:px-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="mr-4"
          />
          <Navigation />
        </div>
        <MobileHeader cookie={cookie} />
      </div>
      <div className="max-lg:hidden">{cookie ? <Logout /> : <Login />}</div>
    </header>
  );
}
