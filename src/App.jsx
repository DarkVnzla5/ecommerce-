import Products from "./components/Products";
import { products } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { ErrorBoundary } from "react-error-boundary";
import filteredProducts from "./components/Menu";

import "./App.css";

const App = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="error-boundary">
          <h2>Ups.. Error 404</h2>
          <h3>{error.message}</h3>

          <button className="btn-error" onClick={resetErrorBoundary}>
            Try again
          </button>
        </div>
      )}
      onError={(error, info) => {
        console.error("ErrorBoundary caught an error: ", error, info);
      }}
    >
      <div className="flex flex-col w-auto ">
        <Header />
        <main>
          <Menu />
          {/* <filteredProducts products={products} /> */}
          <Products products={products} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
