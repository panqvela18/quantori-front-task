"use client";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { handleLogin } from "../scripts/Login";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const success = await handleLogin(emailInput, passwordInput);
    if (success) {
      handleClose();
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-6 py-2 bg-[#68847c] text-white rounded-lg"
      >
        Login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col p-4 bg-white rounded-lg shadow-lg"
        >
          <h1 className="text-lg font-bold mb-4">Login</h1>
          <input
            type="text"
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
            placeholder="Email"
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordInput}
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-between">
            <button
              onClick={handleClose}
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
        </form>
      </Modal>
    </>
  );
}
