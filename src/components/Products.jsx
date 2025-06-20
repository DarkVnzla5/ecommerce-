import { products } from "../Mocks/products";
function Products() {
  return (
    <section>
      <ul className="max-lg:gap-4 grid max-sm:items-center max-sm:justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
          <li
            key={product.id}
            className="card-sm card w-96 gap-2 p-5 bg-base-300 shadow-xl"
          >
            <figure>
              <img
                src={product.thumbnail}
                alt={product.name}
                className="aspect-video h-full w-full block"
              />
            </figure>

            <div className="text-primary card-title">
              <p>{product.description}</p>
            </div>
            <div>
              <p>{product.price} $</p>
            </div>
            <div>
              <p>{product.brand}</p>
              <p>{product.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Products;
