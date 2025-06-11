import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";

import "./App.css";
function App() {
  return (
    <body className="flex flex-col min-h-screen bg-base-100">
      <Header />
      <main>{<Products products={products} />}</main>
    </body>
  );
}

export default App;
