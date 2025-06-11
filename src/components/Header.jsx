import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("halloween");
  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };
  return (
    <nav className=" grid-cols-4  w-full bg-primary-content items-center justify-around gap-4">
      {/* Left Section: Logo and Name */}
      <section className="grid items-center">
        <a href="">
          <img src="/logo.png" alt="Vuelvan Caras Logo" className="h-10 mr-3" />
        </a>
        <span className="font-bold text-primary text-lg">
          Comercial Vuelvan Caras, C.A.
        </span>
      </section>

      {/* Center Section: Search Bar */}
      <section className="flex justify-center ">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="max-md:hidden lg:w-xs p-2 rounded border bg-primary-content text-primary focus:outline-none focus:ring-2 focus:ring-info-content"
        />
        <button className="w-auto btn btn-primary hover:btn-accent ml-2">
          Buscar
        </button>
      </section>

      {/* Right Section: Theme Dropdown */}
      <section>
        <div className=" flex dropdown ">
          <div
            tabIndex={-1}
            role="button"
            className="  hover:btn-accent btn btn-primary m-1"
          >
            {theme}
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Halloween"
                value="halloween"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Luxury"
                value="luxury"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Acid"
                value="acid"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Fantasy"
                value="fantasy"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Abyss"
                value="abyss"
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Synthwave"
                value="synthwave"
                onChange={handleThemeChange}
              />
            </li>
          </ul>
        </div>
      </section>
      {/* Profiles*/}
      <section>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="" alt="Logo empresa" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between" href="">
                Perfil
                <span className="badge">Nuevo</span>
              </a>
            </li>
            <li>
              <a href="">Configuración</a>
            </li>
            <li>
              <a href="">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zM9.75 9.75l4.5-4.5m0 0l4.5 4.5m-4.5-4.5v12m0-12l-4.5 4.5m4.5-4.5l4.5 4.5m-4.5-4.5v12"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="">Notificaciones</a>
            </li>
            <li>
              <a href="">Mensajes</a>
            </li>
          </ul>
        </div>
      </section>
      <section></section>
    </nav>
  );
};
export default Header;
