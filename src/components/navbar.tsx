// NavBar.tsx

import { AiFillDollarCircle } from "react-icons/ai";
import logoHeader from "../assets/logo.png";

export function Navbar({ coin }: { coin: number }) {
  return (
    <nav className="flex justify-between container mx-auto items-center px-8 mt-4">
      <img src={logoHeader} alt="" />
      <div className="flex gap-10">
        <ul className="flex gap-7 text-gray-600">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <h2 className="text-amber-600 flex gap-0.5 items-center text-lg font-bold">
          {coin} <AiFillDollarCircle className="text-lg" />
        </h2>
      </div>
    </nav>
  );
}
