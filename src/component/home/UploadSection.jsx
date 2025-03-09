import { useState } from "react";
import axios from "axios"; // ✅ Import axios
import { Result } from "./Result";

export const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidance] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      console.log("Selected file:", file.name);
      await handleUpload(file);
    }
  };

  const handleUpload = async (file) => {
    const formData = new FormData(); // ✅ Fix variable name
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://express-api-lungscan.onrender.com/predict",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPrediction(response.data.prediction);
      setConfidance(response.data.confidence);
      console.log("Prediction:", response.data.prediction);
      console.log("Confidence:", response.data.confidence);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Error processing image");
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
        <div className="text-center">
          <h1 className="text-primary fw-bold mb-2">
            Lung Cancer Detection Analysis
          </h1>
          <p className="text-muted mb-4">
            Upload your histopathological images of lung for instant AI-powered
            analysis
          </p>
          <div
            className="border border-primary p-4 rounded-3 bg-light"
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              borderStyle: "dashed",
            }}
          >
            <div className="mb-3">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cloud-upload text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579A4.498 4.498 0 0 1 14 6a4.5 4.5 0 0 1-3.5 4.36A3.99 3.99 0 0 1 8 12a3.99 3.99 0 0 1-3.5-2.36A4.5 4.5 0 0 1 2 6c0-.398.078-.779.219-1.132a4.503 4.503 0 0 1 1.187-1.526zM8 2.5a3.5 3.5 0 0 0-3.55 3.575A3.5 3.5 0 0 0 5.5 9h7a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5c-.878 0-1.681.506-2.123 1.285A3.466 3.466 0 0 0 8 2.5zm-2.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>
            <p className="text-muted mb-2">
              Drag and drop your histopathological image here
            </p>
            <p className="text-muted mb-3">
              Supported formats: JPEG, PNG, DICOM
            </p>
            <input
              type="file"
              id="fileInput"
              accept="image/jpeg, image/png, image/dicom"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Browse Files
            </button>
            {selectedFile && (
              <p className="mt-3 text-success">Uploaded: {selectedFile.name}</p>
            )}
          </div>
        </div>
      </div>
      {previewUrl && (
        <Result
          imageSrc={previewUrl}
          prediction={prediction}
          confidence={confidence}
        />
      )}
    </>
  );
};
