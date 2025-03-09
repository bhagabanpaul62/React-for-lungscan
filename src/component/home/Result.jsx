import React from "react";
import { ProgressBar } from "react-bootstrap";

export const Result = ({ imageSrc, prediction, confidence }) => {
  const currentDateTime = new Date().toLocaleString();

  // Ensure confidence is a number
  const confidenceScore = parseFloat(confidence);

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div
        className="card shadow-lg p-4 border-0 rounded-4 bg-light"
        style={{ maxWidth: "650px" }}
      >
        <h3 className="text-center text-primary fw-bold mb-4">
          🩺 Analysis Result
        </h3>
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={imageSrc}
              className="img-fluid rounded shadow-sm border border-2 border-primary"
              alt="Lung X-ray"
              style={{ maxHeight: "200px" }}
            />
          </div>
          <div className="col-md-7">
            <h5 className="text-success fw-bold">✅ {prediction}</h5>
            <p className="text-muted mb-1">Confidence Score</p>
            <ProgressBar
              now={confidenceScore}
              label={`${confidenceScore.toFixed(2)}%`}
              className="mb-3"
              variant="success"
            />
            <div className="mt-3 p-3 bg-white rounded-3 shadow-sm border">
              <p className="mb-1 fw-bold text-primary">Analysis Details</p>
              <ul className="text-muted small ps-3 mb-2">
                <li>No suspicious nodules detected</li>
                <li>Normal lung tissue patterns</li>
                <li>Clear bronchial structures</li>
              </ul>
              <small className="text-muted d-block text-end">
                🕒 Analysis completed on {currentDateTime}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
