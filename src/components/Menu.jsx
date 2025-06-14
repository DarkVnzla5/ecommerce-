import React, { useState } from "react";
import { products as InitialProducts } from "../mocks/products.json";

const Menu = () => {
  const [products] = useState(InitialProducts);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ category: "Todos", minPrice: 0 });
  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === "Todos" || product.category === filter.category) &&
        (product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()))
      );
    });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <section className="relative bg-base-300 w-full flex flex-wrap justify-around items-center ">
      <div className="gap-4">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={handleSearchChange}
            className="input input-bordered input-primary w-full max-w-xs mb-4"
          />
          <select
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            className="select select-primary w-full max-w-xs mb-4"
          >
            <option value="Todos">Todos</option>
            <option value="Herramientas Electricas">
              Herramientas Electricas
            </option>
            <option value="Herramientas Manuales">Herramientas Manuales</option>
            <option value="Pintura y Acabados">Pintura y Acabados</option>
            <option value="Jardineria">Jardineria</option>
          </select>
          <input
            type="number"
            name="minPrice"
            placeholder="Precio minimo"
            value={filter.minPrice}
            onChange={handleFilterChange}
            className="input input-bordered input-primary w-full max-w-xs mb-4"
          />
        </div>
      </div>
    </section>
  );
};
export default Menu;
