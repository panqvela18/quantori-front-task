"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center border border-[#68847c] rounded-full p-2 max-lg:hidden">
        <li className="mr-3">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full ${
              pathname === "/"
                ? "bg-[#68847c] text-white"
                : "bg-transparent text-[#68847c]"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="mr-3">
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full ${
              pathname === "/contact"
                ? "bg-[#68847c] text-white"
                : "bg-transparent text-[#68847c]"
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="mr-3">
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full ${
              pathname === "/about"
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
