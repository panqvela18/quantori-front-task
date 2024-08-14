"use client";
import { useState } from "react";
import Login from "../Modal/Login";
import Logout from "./Logout";

export default function LoginLogoutClient({ cookie }: { cookie: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsOpen(false);
    setLoginOpen(true);
  };
  return (
    <>
      {cookie ? (
        <Logout />
      ) : (
        <button
          onClick={handleLoginClick}
          className="px-6 py-2 bg-[#68847c] text-white rounded-lg max-lg:hidden"
        >
          Login
        </button>
      )}
      <Login open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
