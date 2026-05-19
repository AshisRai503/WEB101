# WEB101 P1: TikTok Frontend Clone using Next.js

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 1 / TikTok Frontend

## Aim

Create a simplified TikTok-style frontend using Next.js, React components, React Hook Form, and Tailwind CSS. The application includes a sidebar, video feed, profile page, upload page, login page, and signup page.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- React Hook Form
- React Icons
- JavaScript

## Main Concepts Applied

- File-based routing in the Next.js app directory
- Reusable React components such as layout, video cards, and video feed
- Utility-first styling using Tailwind CSS
- Form state handling and validation using React Hook Form
- Basic navigation between frontend pages

## Functional Requirements / Features

- Main sidebar/navigation layout
- For You style video feed with video cards
- Profile and upload page routes
- Login and signup forms
- Form validation for required fields, patterns, length, and password confirmation

## Setup / How to Run

- Create the project using `npx create-next-app@latest`.
- Use JavaScript, ESLint, Tailwind CSS, src directory, and App Router.
- Install required packages such as `react-icons` and `react-hook-form`.
- Create layout, page, and component files inside the `src` folder.
- Run the development server using `npm run dev`.

## Implementation Summary

- Cleaned the default Next.js page and prepared the application structure.
- Created a main layout component with sidebar navigation.
- Added pages for profile, upload, following, explore, live, login, and signup.
- Built reusable video components for the main feed.
- Implemented authentication form pages using React Hook Form validation.
- Tested navigation, layout, video feed display, and form validation behavior.

## Testing / Output Evidence

- Application started on the local development server.
- Sidebar and page routes opened correctly.
- Video feed layout displayed video cards.
- Login and signup forms showed validation messages when invalid data was entered.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- Next.js documentation
- React Hook Form documentation
- Tailwind CSS documentation
- FreeCodeCamp React Hook Form tutorial
