# WEB101 P5: Infinite Scroll with TanStack Query

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 5 / Infinite Scroll

## Aim

Implement infinite scrolling in the TikTok application using TanStack Query on the frontend and cursor-based pagination on the backend.

## Technologies Used

- Next.js
- React
- TanStack Query
- React Query Devtools
- Intersection Observer API
- Prisma cursor pagination
- Axios service functions

## Main Concepts Applied

- Cursor-based pagination
- n + 1 pagination pattern
- Infinite queries
- Frontend caching and loading states
- Intersection Observer for scroll detection

## Functional Requirements / Features

- Backend pagination with cursor and limit
- Frontend infinite feed using `useInfiniteQuery`
- Automatic next-page loading when bottom observer becomes visible
- Support for For You and Following feeds
- Loading and end-of-feed messages

## Setup / How to Run

- Check backend pagination in `videoController.js`.
- Install `@tanstack/react-query` and `@tanstack/react-query-devtools`.
- Create `src/app/providers.jsx` with `QueryClientProvider`.
- Wrap the app layout with the provider.
- Create `useIntersectionObserver.js` hook.

## Implementation Summary

- Verified backend returns `videos`, `nextCursor`, and `hasNextPage`.
- Checked following videos pagination using the same cursor structure.
- Created a TanStack Query provider for the app.
- Updated video service functions to accept cursor and limit.
- Replaced normal fetching in `VideoFeed.jsx` with `useInfiniteQuery`.
- Used `flatMap` to combine all loaded video pages.

## Testing / Output Evidence

- Initial feed loaded videos successfully.
- Scrolling to the bottom triggered the observer.
- More videos loaded automatically.
- Loading more videos message appeared during fetch.
- End-of-feed message appeared when there were no more pages.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- MDN Intersection Observer API
- Next.js App Router documentation
- Prisma pagination documentation
- TanStack Query infinite queries documentation
- Course practical PDF
