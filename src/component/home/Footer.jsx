import React from "react";


export const Footer = () => {
  return (
    <footer className="bg-light py-3 border-top">
      <div className="container text-center">
        <p className="mb-1 text-muted">
          © 2025 LungScan AI. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="/privacy-policy" className="text-decoration-none text-muted">
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-decoration-none text-muted"
          >
            Terms of Service
          </a>
        </div>
        <p className="text-muted small mt-2">
          Medical Disclaimer: This tool assists in detection only. Consult a
          healthcare professional for diagnosis.
        </p>
      </div>
    </footer>
  );
};
