const Header = () => {
  return (
    <nav className="navbar shadow-lg max-lg:w-auto lg:w-full flex justify-between items-center p-4">
      <section className="flex-1">
        <div className="btn btn-ghost text-xl">
          <a href="">Comercial Vuelvan Caras, C.A</a>
        </div>
      </section>
      <section className="flex gap-2 ">
        <input
          className="input input-bordered w-24 md:w-auto"
          type="text"
          name=""
          id=""
          placeholder="Buscar..."
        />
      </section>
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
            className="menu menu-sm dropdown-content bg-orange-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <div className="dropdown mb-72">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
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
                aria-label="Default"
                value="luxury"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Business"
                value="business"
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Abyss"
                value="abyss"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Synthwave"
                value="synthwave"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="dark"
                value="dark"
              />
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Header;
