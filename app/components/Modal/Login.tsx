"use client";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { handleLogin } from "../scripts/Login";

interface LoginProps {
  open: boolean;
  onClose: () => void;
}

export default function Login({ open, onClose }: LoginProps) {
  const [username, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [error, setError] = useState("");

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const success = await handleLogin(username, passwordInput);
    if (success) {
      onClose();
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center"
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col p-8 bg-white rounded-lg shadow-lg w-80"
      >
        <h1 className="text-lg font-bold mb-4 text-[#68847c]">Login</h1>
        <input
          type="text"
          onChange={(e) => setUsernameInput(e.target.value)}
          value={username}
          placeholder="Username"
          className="mb-2 p-2 border border-gray-300 rounded outline-none"
        />
        <input
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
          value={passwordInput}
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded outline-none"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#68847c] text-white rounded"
          >
            Login
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </Modal>
  );
}
