import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-800 text-white">
      <div className="container">
        <div className="flex items-center h-16 justify-between">
          <div className="">Supabase + ToDo List</div>
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              Create New Item
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              View Completed
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              View Pending
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
            >
              View Deleted
            </a>
          </nav>
          <div className="">
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
              SignIn
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
