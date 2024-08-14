"use client";
import { handleLogout } from "../scripts/Logout";

export default function Logout() {
  return (
    <button
      className="px-6 py-2 bg-[#68847c] text-white rounded-lg"
      onClick={() => handleLogout()}
    >
      Logout
    </button>
  );
}
