# WEB101 P4: Connecting TikTok Frontend to Backend

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 4 / TikTok Frontend Backend Integration

## Aim

Connect the TikTok frontend application with the backend server so the frontend can send API requests, receive backend data, and support login, video feed, profile, and user-following features.

## Technologies Used

- Next.js
- React
- Axios
- JWT token handling
- Express backend API
- React Context
- Local Storage

## Main Concepts Applied

- Frontend-backend communication
- Axios instance configuration
- Request and response interceptors
- Token-based authentication on the frontend
- React Context for auth state
- Dynamic routing in Next.js

## Functional Requirements / Features

- Central API client using backend base URL
- Login and logout connected to backend authentication
- Token saved in localStorage
- Video feed loaded from backend API
- Explore users page with follow and unfollow
- Dynamic profile route using `/profile/[userId]`

## Setup / How to Run

- Install frontend dependencies: `axios`, `jwt-decode`, and `react-hot-toast`.
- Create `src/lib/api-config.js` for Axios configuration.
- Create `.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:8000/api`.
- Create authentication context and wrap the app with `AuthProvider`.
- Make sure both backend and frontend servers are running.

## Implementation Summary

- Configured Axios with a base URL and JSON headers.
- Added a request interceptor to attach Bearer token from localStorage.
- Added a response interceptor to remove token and redirect on 401 errors.
- Created `authContext.jsx` to manage user, login, logout, and loading state.
- Created video and user service files to organize API calls.
- Built pages for explore users, following, and dynamic profile routes.

## Testing / Output Evidence

- Registered multiple users.
- Logged in and verified token-based authentication.
- Uploaded videos from a user account.
- Fetched backend videos in the feed.
- Tested follow and unfollow actions.
- Opened a user profile using a dynamic URL.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- Axios documentation
- Express documentation
- Next.js documentation
- Prisma documentation
- React Hook Form documentation
