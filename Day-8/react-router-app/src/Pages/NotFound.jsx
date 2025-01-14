// NotFound.jsx
import React from "react";
import "../Styles/404.css";
const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <div className="error-code">404</div>
          <div className="error-circle"></div>
          <div className="error-line"></div>
        </div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for seems to have wandered off.</p>
        <div className="not-found-actions">
          
          <a href="/" className="home-link">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
