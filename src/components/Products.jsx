const Products = ({ products }) => {
  return (
    <section className="relative w-3/4 flex flex-wrap justify-around items-center">
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={product.thumbnail} alt={product.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <div>
                  <span className="font-bold">Price:</span> ${product.price}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add To Cart</button>
                  <button className="btn btn-primary">Buy Now</button>
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
