# WEB101 P3: Reflection - File Upload Implementation in Next.js

## Documentation: Concepts Applied

In this practical, I applied the following main concepts:

- Multipart form data
- Client-side file validation
- Server-side file parsing
- Axios upload progress callback
- Drag-and-drop upload interface
- Next.js API routes

These concepts helped me understand how the practical works beyond only copying the code. I was able to connect the theory from the report with the actual implementation steps.

## What I Learned

I learned how to use Multipart form data, Client-side file validation, and server-side file parsing. I also learned that a working project depends on correct folder structure, correct package installation, and careful testing after every main change.

## Challenges Faced

- Understanding multipart form data
- Handling changes in the Formidable API
- Finding the correct file size error code
- Resolving server file paths correctly

## How I Overcame the Challenges

- Separated client validation from server upload logic.
- Checked the file object returned by Formidable carefully.
- Created the uploads folder automatically with `fs.mkdirSync()`.
- Used small tests to verify upload success and validation errors.

## Possible Future Improvements

- Add file preview before upload.
- Store upload metadata in a database.
- Add authentication before allowing uploads.

## Final Reflection

This practical improved my understanding of file upload handling and validation. It also showed me the importance of writing organized code, testing each feature step by step, and documenting the work clearly in GitHub. The practical was useful because it connected classroom theory with real implementation work.
