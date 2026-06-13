import { Link, NavLink } from "react-router-dom";

export default function Header({ language }) {
  const navItems = [
    { path: "/", en: "Home", es: "Inicio" },
{ path: "/services", en: "Services", es: "Servicios" },
{ path: "/client-portal", en: "Client Portal", es: "Portal del Cliente" },
{ path: "/resources", en: "Resources", es: "Recursos" },
{ path: "/about", en: "About Us", es: "Nosotros" },
{ path: "/contact", en: "Contact", es: "Contacto" },
  ];

  return (
    <header className="bg-black text-white border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="leading-tight">
  <img
    src="/logo.png"
    alt="United Home Services"
    className="h-26 w-auto"
  />
</Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-bold border-b-2 border-yellow-500 pb-2"
                  : "text-white hover:text-yellow-500 font-semibold"
              }
            >
              {language === "en" ? item.en : item.es}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-400"
        >
          {language === "en" ? "GET STARTED" : "COMENZAR"}
        </Link>
      </div>
    </header>
  );
}