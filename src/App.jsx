import React from "react";
import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";

import "./App.css";
function App() {
  return (
    <body>
      <Header />
      <main>
        <Products products={products} />
      </main>
    </body>
  );
}

export default App;
