import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout() {
  const [navExpand, setNavExpand] = useState(false);

  const handleNavExpand = () => setNavExpand((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full bg-slate-800 text-white py-4 px-8 flex items-center">
        <div
          className={`w-10 h-10 bg-slate-800 flex items-center justify-center mr-4 cursor-pointer transform transition-transform duration-300 ${
            navExpand ? "rotate-45" : ""
          } text-3xl`}
          name="navigation"
          onClick={handleNavExpand}
        >
          💠
        </div>
        <Header />
      </div>

      {/* Overlay Navigation */}
      {navExpand && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleNavExpand}
        ></div>
      )}
      {navExpand && <Navigation />}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 bg-slate-300 shadow-md">
        <Outlet />
      </main>
    </div>
  );
}
