import { NavLink } from "react-router";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="py-3 mb-5">
          <h1>MoviesApp</h1>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/"}
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
