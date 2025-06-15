import { useState, useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("halloween");
  const [dolarPromedio, setDolarPromedio] = useState(null);
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  }; // Toggle the search bar visibility
  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };
  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const response = await fetch(
          "https://ve.dolarapi.com/v1/dolares/oficial"
        );
        const data = await response.json();
        setDolarPromedio(data.promedio);
      } catch (error) {
        console.error("Error al obtener el valor del dólar:", error);
      }
    };
    fetchDolar();
  }, []);

  return (
    <nav className=" grid lg:grid-cols-4 w-full m-2 bg-base-300 items-center justify-around gap-4">
      {/* Left Section: Logo and Name */}
      <section className="flex items-center justify-between gap-2">
        <a href="">
          <img
            src="\Logo.jpg"
            alt="Vuelvan Caras Logo"
            className="h-20 w-24 mr-28 aspect-video shadow-lg"
          />
        </a>

        <span className="font-bold text-primary">
          Comercial Vuelvan Caras, C.A.
        </span>
      </section>

      {/* Center Section: Search Bar */}
      <section className="flex justify-center ">
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleSearch}
            className="btn btn-ghost btn-circle mr-2"
            aria-label="Mostrar/ocultar búsqueda"
          >
            <IoSearch size={24} />
          </button>
          {isOpen && (
            <input
              type="text"
              placeholder="Buscar productos..."
              className="input input-bordered max-md:hidden transition-all duration-300"
            />
          )}
        </div>
        <button className="w-auto btn btn-primary hover:btn-accent ml-2">
          Buscar
        </button>
      </section>
      {/* Center Section: Dólar Promedio */}
      <section className="flex justify-center items-center gap-2 ">
        <div className="text-primary font-bold">
          <span>
            Dólar BCV:{" "}
            {dolarPromedio ? (
              <span>
                {new Intl.NumberFormat("es-VE", {
                  style: "currency",
                  currency: "USD",
                }).format(dolarPromedio)}
              </span>
            ) : (
              <span className="text-red-500">Cargando...</span>
            )}
          </span>
        </div>
      </section>

      {/* Right Section: Theme Dropdown */}
      <section className="flex">
        <div className=" flex dropdown">
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
      <section className="flex">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <IoPersonCircleSharp className="size-full " />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-primary bg-primary-content dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between" href="">
                Perfil
                <span className="badge text-primary bg-primary-content">
                  Nuevo
                </span>
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
    </nav>
  );
};
export default Header;
