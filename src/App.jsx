import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";

function App() {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="error-boundary flex flex-col items-center justify-center bg-base-300 h-screen w-full  text-primary">
          <h2>Ups.. Error 404</h2>
          <h3>{error.message}</h3>

          <button
            className="btn-primary text-error bg-accent hover:bg-primary-focus"
            onClick={resetErrorBoundary}
          >
            Try again
          </button>
        </div>
      )}
      onError={(error, info) => {
        console.error("ErrorBoundary caught an error: ", error, info);
      }}
    >
      <div className="flex flex-col w-100vw h-100vh">
        <Header />
        <Filters />
        <main>
          <div className="container mx-auto">
            <Products />
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
