import {
  FaStethoscope,
  FaChartLine,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

export const InfoSection = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* How it Works */}
        <div className="col">
          <div className="card shadow-sm p-4 border-0 rounded-3 text-center">
            <FaStethoscope className="text-primary fs-3 mb-2" />
            <h5 className="fw-bold">How it Works</h5>
            <p className="text-muted">
              Advanced AI algorithms analyze your histopathological image for
              potential abnormalities.
            </p>
          </div>
        </div>

        {/* Accuracy */}
        <div className="col">
          <div className="card shadow-sm p-4 border-0 rounded-3 text-center">
            <FaChartLine className="text-primary fs-3 mb-2" />
            <h5 className="fw-bold">91% Accuracy</h5>
            <p className="text-muted">
              Our system is trained on millions of medical images for high
              precision.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="col">
          <div className="card shadow-sm p-4 border-0 rounded-3 text-center">
            <FaArrowRight className="text-primary fs-3 mb-2" />
            <h5 className="fw-bold">Next Steps</h5>
            <p className="text-muted">
              Consult with your healthcare provider to discuss the results.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy & Security Notice */}
      <div className="mt-4 p-4 rounded-3 bg-light border shadow-sm">
        <div className="d-flex align-items-start">
          <FaShieldAlt className="text-primary fs-4 me-2" />
          <div>
            <h6 className="fw-bold">Your Privacy & Security</h6>
            <p className="text-muted mb-0">
              All uploads are encrypted and processed securely. We comply with
              HIPAA and other healthcare data protection standards. Your medical
              information is never shared without your explicit consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
