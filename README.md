# Counter App

This is a simple counter application built with Next.js, React, and TypeScript. It demonstrates the use of server-side API routes and client-side state management.


## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Turso DB 
- SQLite

## Features

- Displays a counter value
- Increments the counter value through an API call
- Uses React hooks for state management
- Implements API routes with Next.js
- Styled with Tailwind CSS

## Main Components

1. `CounterDisplay.tsx`: A React component that displays the current count and provides a button to increment it.
2. `route.ts` (in api/increment/): Handles the API route for incrementing the counter.
3. `page.tsx`: The main page component that renders the CounterDisplay.
4. `database.ts`: Simulates a database for storing the counter value.