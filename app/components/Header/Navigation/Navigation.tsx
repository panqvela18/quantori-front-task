"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="md:flex justify-center ml-[15px] hidden ">
      <ul className="flex items-center justify-center bg-white rounded-full border border-[#66837e]  ">
        <li
          className={`${
            pathname === "/"
              ? "bg-[#68847c] text-white"
              : "bg-transparent text-[#68847c]"
          }  h-full rounded-l-full px-4 py-3 cursor-pointer hover:bg-[#e6efef] transition-colors duration-300`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            pathname === "/contact"
              ? "bg-[#68847c] text-white"
              : "bg-transparent text-[#68847c]"
          }  h-full px-4 py-3 cursor-pointer hover:bg-[#e6efef] transition-colors duration-300`}
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className={`${
            pathname === "/about"
              ? "bg-[#68847c] text-white"
              : "bg-transparent text-[#68847c]"
          }  h-full px-4 py-3 rounded-r-full cursor-pointer hover:bg-[#e6efef] hover:rounded-r-full transition-colors duration-100`}
        >
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
