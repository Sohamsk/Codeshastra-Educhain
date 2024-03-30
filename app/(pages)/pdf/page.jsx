"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Pdf = () => {
  const [pdfData, setPdfData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPdf = async (pdfUrl) => {
    try {
      const response = await axios.get(`/api/pdf?url=${pdfUrl}`, {
        responseType: "blob",
      });
      setPdfData(response.result);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      setError("Failed to fetch PDF"); // Display user-friendly error message
    }
  };

  useEffect(() => {
    // Example: Fetch PDF on component mount (replace with your triggering logic)
    const initialPdfUrl =
      "https://arxiv.org/pdf/2401.00222.pdf"; // Replace with your actual URL
    fetchPdf(initialPdfUrl);
  }, []);

  return (
    <>
      <div>
        {error && <p>Error: {error}</p>}
        {pdfData && (
          // Display the PDF data (e.g., using iframe or embed tag)
          <iframe
            src={`data:application/pdf;base64,${pdfData}`}
            width="400"
            height="500"
          />
        )}
      </div>
    </>
  );
};

export default Pdf;
