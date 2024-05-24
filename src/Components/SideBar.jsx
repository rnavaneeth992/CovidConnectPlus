import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineContacts } from "react-icons/md";
import { FaMap } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex pt-16 flex-col h-screen p-2 bg-white shadow-md w-60">
        {/* Logo inserted in the dashboard panel */}
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/030932d3-8fd0-44d9-b238-639b2d366e55/d3g51r9-8905ea1e-fa89-48dd-bf6b-b4145b9260a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzMDkzMmQzLThmZDAtNDRkOS1iMjM4LTYzOWIyZDM2NmU1NVwvZDNnNTFyOS04OTA1ZWExZS1mYTg5LTQ4ZGQtYmY2Yi1iNDE0NWI5MjYwYTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LLAIscRAOS4bjOYM1UwBmz5ckHPJsrMiQApbogmZDvw"
         alt="Logo" className="mx-auto mb-4" />

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
          </div>
          <div className="flex-1 font-bold">
            <ul className="pt-2 pb-4 space-y-2 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100"
                >
                  <CiHome size={20}/>
                  <span>Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/contacts"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100"
                >
                  <MdOutlineContacts size={20}/>
                  <span>Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100"
                >
                  <FaMap size={20}/>
                  <span>Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}