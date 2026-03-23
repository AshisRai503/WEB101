// pages/api/upload.js

import formidable from "formidable";
import fs from "fs";
import path from "path";

// Tell Next.js NOT to parse the body — formidable will do it
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  // Create an 'uploads' folder if it doesn't exist
  const uploadDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // Set up formidable to handle the file
  const form = formidable({
    uploadDir: uploadDir,      // where to save files
    keepExtensions: true,      // keep .jpg, .pdf, etc.
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  // Parse the incoming request
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Upload failed", error: err.message });
    }

    return res.status(200).json({
      message: "File uploaded successfully!",
      fileName: files.file[0].originalFilename,
    });
  });
}