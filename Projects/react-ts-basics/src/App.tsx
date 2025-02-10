import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goals from './assets/goals.jpg'

export default function App() {
  return (
    <main>
      <Header image={{src: goals, alt: 'course gaols'}}>
        <h1>Course Goals</h1>
      </Header>
      <CourseGoal 
        title='Learn React and Typescript'
        description='We will be starting with the basics'
      />
    
    </main>

  )
}