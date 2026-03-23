// pages/index.js

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export default function Home() {
  const [file, setFile] = useState(null);          // the selected file
  const [progress, setProgress] = useState(0);     // upload % progress
  const [message, setMessage] = useState("");      // success/error message
  const [fileError, setFileError] = useState("");  // file validation error

  const { handleSubmit } = useForm();

  // ---- File Validation ----
  const validateFile = (selectedFile) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(selectedFile.type)) {
      return "Only JPG, PNG, and PDF files are allowed.";
    }
    if (selectedFile.size > maxSize) {
      return "File must be smaller than 5MB.";
    }
    return null; // no error
  };

  // ---- Drag and Drop Handler ----
  const onDrop = useCallback((acceptedFiles) => {
    const selected = acceptedFiles[0];
    const error = validateFile(selected);
    if (error) {
      setFileError(error);
      setFile(null);
    } else {
      setFileError("");
      setFile(selected);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false, // only one file at a time
  });

  // ---- Normal File Picker Handler ----
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    const error = validateFile(selected);
    if (error) {
      setFileError(error);
      setFile(null);
    } else {
      setFileError("");
      setFile(selected);
    }
  };

  // ---- Form Submit / Upload ----
  const onSubmit = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setMessage("");
      setProgress(0);

      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📁 File Upload</h1>

      {/* Drag and Drop Zone */}
      <div
        {...getRootProps()}
        style={{
          ...styles.dropzone,
          borderColor: isDragActive ? "#0070f3" : "#ccc",
          backgroundColor: isDragActive ? "#e8f0fe" : "#fafafa",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag & drop a file here, or click to select</p>
        )}
      </div>

      {/* OR: Normal File Input */}
      <p style={{ textAlign: "center", color: "#888" }}>— or —</p>
      <input type="file" onChange={handleFileChange} style={styles.fileInput} />

      {/* Validation Error */}
      {fileError && <p style={styles.error}>{fileError}</p>}

      {/* Show Selected File Name */}
      {file && (
        <p style={styles.fileName}>
          ✅ Selected: <strong>{file.name}</strong> (
          {(file.size / 1024).toFixed(1)} KB)
        </p>
      )}

      {/* Upload Button */}
      <button
        onClick={handleSubmit(onSubmit)}
        style={styles.button}
        disabled={!file}
      >
        Upload File
      </button>

      {/* Progress Bar */}
      {progress > 0 && (
        <div style={styles.progressContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
          <p style={{ textAlign: "center" }}>{progress}%</p>
        </div>
      )}

      {/* Success/Error Message */}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

// ---- Styles ----
const styles = {
  container: {
    maxWidth: "500px",
    margin: "60px auto",
    padding: "30px",
    fontFamily: "sans-serif",
    border: "1px solid #eee",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },
  title: {
    textAlign: "center",
    marginBottom: "24px",
  },
  dropzone: {
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    marginBottom: "12px",
  },
  fileInput: {
    display: "block",
    margin: "0 auto 12px",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  fileName: {
    textAlign: "center",
    color: "#333",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginTop: "16px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  progressContainer: {
    marginTop: "16px",
    backgroundColor: "#eee",
    borderRadius: "8px",
    overflow: "hidden",
  },
  progressBar: {
    height: "12px",
    backgroundColor: "#0070f3",
    transition: "width 0.3s ease",
  },
  message: {
    marginTop: "16px",
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
};