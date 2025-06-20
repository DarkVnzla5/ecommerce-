import { IoSearch } from "react-icons/io5";
import { useState } from "react";
function Filters() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-center gap-4 p-4 items-center">
      <section>
        <section className="flex justify-center ">
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleSearch}
              className="btn btn-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:btn-accent mr-2"
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
          <button className="w-auto btn btn-primary hover:btn-accent ml-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            Buscar
          </button>
        </section>
      </section>
      <section className="flex items-center justify-between gap-4">
        <p>Precio: </p>

        <input type="range" className="range" min={0} max="100" />
      </section>
    </nav>
  );
}
export default Filters;
