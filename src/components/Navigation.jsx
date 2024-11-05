import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div
      name="navigation"
      className="fixed left-0 top-24 w-60 h-[calc(100%-5rem)] bg-slate-800 z-30 shadow-lg"
    >
      <nav className="p-4">
        <Link
          to="/sos"
          className="block mb-2 text-emerald-200 border-t-2 border-gray-600 px-3 py-2 font-semibold text-xl"
        >
          SoS
        </Link>
        <Link
          to="/events"
          className="block mb-2 text-emerald-200 border-t-2 border-gray-600 px-3 py-2 font-semibold text-xl"
        >
          Events
        </Link>
      </nav>
    </div>
  );
}
