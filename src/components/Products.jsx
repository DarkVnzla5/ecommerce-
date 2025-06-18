import React from "react";
import { Products as List } from "../mocks/products.json";
function Products() {
  function manageArray() {
    const Things = List.map((product) => {
      return {
        id: product.id,
        title: product.title,
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
                <img src={product.thumbnail} alt={product.title} />
              </figure>
              <div className="card-body">
                <p className="card-title">{product.title}</p>
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
