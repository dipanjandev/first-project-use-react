import logoHeader from "../assets/logo.png";

export function Navbar() {
  return (
    <nav className="flex justify-between container mx-auto items-center">
      <img src={logoHeader} alt="" />
      <ul className="flex gap-7 text-gray-600">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
    </nav>
  );
}
