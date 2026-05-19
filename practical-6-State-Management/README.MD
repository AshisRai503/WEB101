# WEB101 P6: Todo List with Zustand State Management

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 6 / Todo Zustand

## Aim

Create a simple Todo List application using React and Zustand to understand centralized state management without prop drilling or a complex Context setup.

## Technologies Used

- React
- Vite
- Zustand
- Zustand persist middleware
- JavaScript
- localStorage

## Main Concepts Applied

- Central store state management
- Actions for updating state
- Component-based React structure
- Temporary input state using `useState`
- Persisting state in localStorage

## Functional Requirements / Features

- Add new todos
- Toggle completed status
- Delete todos
- Clear completed todos
- Display total and completed count
- Keep todos after page refresh using persistence

## Setup / How to Run

- Create a Vite React project with `npm create vite@latest todo-zustand`.
- Run `npm install`.
- Install Zustand with `npm install zustand`.
- Create `components` and `store` folders.
- Run the app using `npm run dev`.

## Implementation Summary

- Created `src/store/todoStore.js` with the `todos` array.
- Added store actions: `addTodo`, `toggleTodo`, `removeTodo`, and `clearCompleted`.
- Used `persist` middleware with the storage name `todo-storage`.
- Created `TodoInput`, `TodoItem`, and `TodoList` components.
- Updated `App.jsx` to connect components and display todo counts.

## Testing / Output Evidence

- Added multiple todos.
- Marked a todo as completed and checked line-through style.
- Refreshed the page and confirmed todos remained saved.
- Clicked Clear Completed and verified completed items were removed.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- MDN localStorage documentation
- React useState documentation
- Vite guide
- Zustand introduction
- Zustand persist documentation
