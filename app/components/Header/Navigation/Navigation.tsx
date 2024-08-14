"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("home");

  return (
    <nav>
      <ul className="flex items-center border border-[#68847c] rounded-full p-2 max-lg:hidden">
        <li className="mr-3" onClick={() => setActive("home")}>
          <Link
            href="/"
            className={`px-4 py-2 rounded-full  ${
              active === "home"
                ? "bg-[#68847c] text-white"
                : "bg-transparent text-[#68847c]"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="mr-3" onClick={() => setActive("contact")}>
          <Link
            href="/"
            className={`px-4 py-2 rounded-full  ${
              active === "contact"
                ? "bg-[#68847c] text-white"
                : "bg-transparent text-[#68847c]"
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="mr-3" onClick={() => setActive("about")}>
          <Link
            href="/"
            className={`px-4 py-2 rounded-full  ${
              active === "about"
                ? "bg-[#68847c] text-white"
                : "bg-transparent text-[#68847c]"
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
