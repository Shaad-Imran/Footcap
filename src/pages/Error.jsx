import React from "react";

const Error = () => {
  return (
    <>
      <section section className="section error">
        <div
          className="container
        "
        >
          <h2 class="h2 section-title error-title">404</h2>
          <h2 className="h1 error-subtitle">Opps ! Page not found</h2>
          <p className="error-text">
            Sorry, the page you're looking for doesn't exist
          </p>
          <button class="btn btn-primary">
            <span>Return Home</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Error;
