# React Typescript Basics: Course Goals Tracker
This is the first mini project built to practice TypeScript with React. The application allows users to add and delete course goals dynamically.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Project Structure](#project-structure)
5. [Key Functionality](#key-functionality)
6. [What I learned](#what-i-learned)
7. [Setup Instructions](#setup-instructions)
8. [Code Implementation](#code-implementation)
9. [Future Improvements](#future-improvements)
8. [Get In Touch](#get-in-touch)

## Overview

The Course Goals Tracker is a dynamic web application built with **React** and **TypeScript**. It allows users to manage their course goals by **adding** and **deleting goals**. This project was developed as a hands-on learning experience to understand TypeScript integration with React and to learn front-end development practices.

## Features

- Add Course Goals: Users can add new goals by providing a title and a description.
- View Course Goals: A list of all added goals is displayed, allowing users to quickly review their progress.
- Delete Goals: Goals can be removed from the list with a single click.
- Responsive Design: The application is styled using Tailwind CSS ensuring a clean and responsive layout across devices.

## Technologies
- **React**: The core library for building the user interface using functional components and hooks.
- **TypeScript**: Provides strong typing and improves code reliability and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive styling.

## Project Structure

The application is organized into modular components for better maintainability and scalability:

1. **Header**: Displays the application title and an image.
2. **NewGoal**: A form component for adding new goals.
3. **CourseGoalList**: Renders the list of goals.
4. **CourseGoal**: Represents an individual goal item with options to view or delete it.

## Key Functionality

1. Adding Goals
    - Users can input a goal title and description in the NewGoal form.
    - The App component manages the state of the goals list and updates it when a new goal is added.

2. Viewing Goals
The CourseGoalList component maps through the list of goals and renders each one using the CourseGoal component.

3. Deleting Goals
    - Each goal has a "Delete" button that removes it from the list.
    - The App component handles the deletion logic by filtering out the deleted goal from the state.


## What I Learned

This project provided valuable insights into:

- **TypeScript Integration**: Using TypeScript with React for type safety and better developer experience.
- **State Management**: Managing application state with React's useState hook.
- **Component Design**: Breaking down the UI into reusable and modular components.
- **Event Handling**: Passing functions as props to handle user interactions like adding or deleting goals.
- **Styling with Tailwind CSS**: Leveraging utility classes for rapid and responsive styling.


## Setup Instructions

To run the project locally:
1. Clone the repository:
   ```sh
   git clone https://github.com/Ehmkayel/study_mate.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Projects/react-ts-basics
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open **http://localhost:5173** in your browser.

## Code Implementation
### `App.tsx`
- Uses `useState` to manage the list of goals.
- Implements `handleClick` to add new goals.
- Implements `handleDelete` to remove goals from the list.

```tsx
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg';
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleClick = (goal: string, summary: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDelete = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'course goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleClick}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </main>
  );
}
```

---

## Future Improvements

To enhance the application further, the following features could be implemented:
- Persist goals in **local storage**: Save goals in local storage to retain data even after refreshing the page.
- Add **animations** for better user experience.
- Implement **edit functionality** for goals.
- Search and Filter: Implement search and filter functionality to help users find specific goals easily.


## Get in Touch
You can reach out to me;
 - Linkedin- [Morufat-Lamidi](https://linkedin.com/in/morufat-lamidi)
 - Tiktok- [Ehmkay](https://www.tiktok.com/@_ehmkay?)
 - Frontend Mentor - [@Ehmkayel](https://www.frontendmentor.io/profile/Ehmkayel)
 - Twitter - [@kamalehmk](https://www.twitter.com/kamalehmk)
 - Gmail- [Mail](mailto:lamidimorufat0@gmail.com);


