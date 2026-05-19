# WEB101 P3: File Upload Implementation in Next.js

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 3 / File Upload

## Aim

Create a React and Next.js file upload application with multipart form data, file type validation, file size validation, upload progress tracking, and drag-and-drop file selection.

## Technologies Used

- Next.js
- React
- React Hook Form
- Axios
- React Dropzone
- Formidable
- Node.js file system module

## Main Concepts Applied

- Multipart form data
- Client-side file validation
- Server-side file parsing
- Axios upload progress callback
- Drag-and-drop upload interface
- Next.js API routes

## Functional Requirements / Features

- Upload form with drag-and-drop area
- Accepted file types: JPEG, PNG, and PDF
- Maximum file size validation of 5MB
- Real-time upload progress bar
- Server-side upload route using Formidable
- Uploaded file saved inside `public/uploads`

## Setup / How to Run

- Create a new Next.js project named `file-upload`.
- Install `react-hook-form`, `formidable`, `axios`, and `react-dropzone`.
- Create the upload UI in `pages/index.js`.
- Create the API upload route in `pages/api/upload.js`.
- Run the project using `npm run dev`.

## Implementation Summary

- Used React state to store selected file, upload status, progress, and errors.
- Used React Dropzone to accept or reject selected files.
- Validated MIME type and file size before upload.
- Sent selected file using `FormData` and Axios.
- Disabled the default Next.js body parser so Formidable could handle multipart data.
- Created the upload directory automatically if it did not already exist.

## Testing / Output Evidence

- The drag-and-drop upload interface displayed properly.
- Valid JPEG, PNG, and PDF files were accepted.
- Invalid files displayed validation errors.
- Progress bar updated during upload.
- Uploaded files appeared inside the server upload directory.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- GeeksforGeeks React Hook Form guide
- GeeksforGeeks Axios in React guide
- GeeksforGeeks React Dropzone guide
- GeeksforGeeks Formidable file upload guide
- GeeksforGeeks multipart/form-data guide
