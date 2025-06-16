const Products = ({ products }) => {
  return (
    <section className="relative bg-base-300 w-full flex flex-nowrap justify-around items-center ">
      <div className="gap-4">
        <ul className="text-primary grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => (
            <li
              key={product.id}
              className="card bg-primary-content p-2 size-full"
            >
              <a href={""}>
                <figure>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="aspect-video object-fill border-black rounded border-2 size-full"
                  />
                </figure>
              </a>
              <div className="card-body text-primary">
                <h2 className="card-title">{product.title}</h2>
                <p>
                  {product.description.length >= 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <div>
                  <span className="font-bold">Price:</span> ${product.price}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
