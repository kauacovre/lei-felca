import { NavLink } from "react-router-dom";

export default function Navbar({ tutorials }) {
  return (
    <header className="siteHeader">
      <nav className="navbar" aria-label="Navegacao principal">
        <NavLink to="/" className="brand" aria-label="Voltar para a pagina inicial">
          <span className="brandMark" aria-hidden="true">LF</span>
          <span>
            <strong>Lei Felca</strong>
            <small>Guia para familias</small>
          </span>
        </NavLink>

        <div className="navLinks">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
            Home
          </NavLink>

          {tutorials.map((tutorial) => (
            <NavLink
              key={tutorial.slug}
              to={`/tutorial/${tutorial.slug}`}
              className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            >
              {tutorial.shortTitle}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
