import React, { useState } from "react";
import { Products as InitialProducts } from "../mocks/products.json";

const Menu = () => {
  const [Products] = useState(InitialProducts);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "Todos",
    minPrice: 0,
    brand: "Todos",
  });
  // function filterProducts(products) {
  //   return products.filter((product) => {
  //     return (
  //       product.price >= filters.minPrice &&
  //       (filters.category === "Todos" ||
  //         product.category === filters.category) &&
  //       (filters.brand === "Todos" || product.brand === filters.brand)
  //     );
  //   });
  // }
  // const filteredProducts = filterProducts(products);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <section className="flex items-center justify-center gap-4 p-4 bg-base-300 text-primary">
      <div>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={handleSearchChange}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="Todos">Todos</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          name="minPrice"
          placeholder="Precio mínimo"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      {/* <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const results = filteredProducts(products);
            <p>{results}</p>;
          }}
        >
          Buscar
        </button>
      </div> */}
    </section>
  );
};
export default Menu;
