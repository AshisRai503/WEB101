# WEB101 P5: Reflection - Infinite Scroll with TanStack Query

## Documentation: Concepts Applied

In this practical, I applied the following main concepts:

- Cursor-based pagination
- n + 1 pagination pattern
- Infinite queries
- Frontend caching and loading states
- Intersection Observer for scroll detection

These concepts helped me understand how the practical works beyond only copying the code. I was able to connect the theory from the report with the actual implementation steps.

## What I Learned

I learned how to use Cursor-based pagination, n + 1 pagination pattern, and infinite queries. I also learned that a working project depends on correct folder structure, correct package installation, and careful testing after every main change.

## Challenges Faced

- Understanding cursor-based pagination compared to page numbers
- Using `getNextPageParam` correctly
- Connecting the observer trigger to `fetchNextPage`
- Avoiding repeated videos when a cursor is provided

## How I Overcame the Challenges

- Checked backend response shape before changing the frontend.
- Used TanStack Query Devtools for debugging.
- Used Prisma `cursor` and `skip: 1` to avoid duplicates.
- Tested with scrolling behavior in the browser.

## Possible Future Improvements

- Add loading skeletons for each video card.
- Improve mobile scroll performance.
- Add retry or refresh controls when the feed request fails.

## Final Reflection

This practical improved my understanding of pagination and infinite scrolling. It also showed me the importance of writing organized code, testing each feature step by step, and documenting the work clearly in GitHub. The practical was useful because it connected classroom theory with real implementation work.
