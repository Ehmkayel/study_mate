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
