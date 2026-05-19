# WEB101 P2: Reflection - RESTful Weather API Dashboard

## Documentation: Concepts Applied

In this practical, I applied the following main concepts:

- RESTful API communication
- HTTP methods: GET, POST, PUT, DELETE
- Fetch API with async/await
- JSON request and response handling
- Client-side state management using an array

These concepts helped me understand how the practical works beyond only copying the code. I was able to connect the theory from the report with the actual implementation steps.

## What I Learned

I learned how to use RESTful API communication, HTTP methods: GET, POST, PUT, DELETE, and fetch api with async/await. I also learned that a working project depends on correct folder structure, correct package installation, and careful testing after every main change.

## Challenges Faced

- Handling URL encoding for city names
- Managing local state after different API requests
- Understanding that JSONPlaceholder does not permanently store data

## How I Overcame the Challenges

- Used `encodeURIComponent()` when building the weather request URL.
- Updated the local `savedLocations` array after each action.
- Used API response information and browser console logs for debugging.

## Possible Future Improvements

- Use a real backend database instead of JSONPlaceholder.
- Add loading spinners and better error messages.
- Store favorite cities in localStorage.

## Final Reflection

This practical improved my understanding of REST API communication from the browser. It also showed me the importance of writing organized code, testing each feature step by step, and documenting the work clearly in GitHub. The practical was useful because it connected classroom theory with real implementation work.
