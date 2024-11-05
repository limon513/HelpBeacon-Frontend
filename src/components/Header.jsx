import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center justify-between w-full">
        <div name="home-logo">
          <Link to="/">
            {" "}
            <img src="Help.svg" width="120" height="120" />{" "}
          </Link>
        </div>
        <div name="profile" className="p-3 hover:bg-slate-600 rounded-2xl">
          <p className="font-semibold text-xl text-emerald-200">@Guest123</p>
          <p className="text-sm text-emerald-100">01111111111</p>
        </div>
      </div>
    </div>
  );
}
