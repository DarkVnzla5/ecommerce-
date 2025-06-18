import React from "react";
import { Products as Array } from "../mocks/products.json";
function Products() {
  function manageArray() {
    const Things = Array.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.thumbnail,
        brand: product.brand,
        price: product.price,
      };
    });
    return Things;
  }
  return (
    <section className="relative bg-base-300 w-full flex flex-nowrap justify-around items-center ">
      <div className="gap-4">
        <ul className="text-primary grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {manageArray().map((product) => (
            <li
              key={product.id}
              className="card w-96 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img src={product.thumbnail} alt={product.name} />
              </figure>
              <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
