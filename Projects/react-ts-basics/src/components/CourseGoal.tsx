interface CourseGoalsProp{
  title: string;
  description: string
}

export default function CourseGoal({ title, description}: CourseGoalsProp){
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </div>
    </article>
  ) 
}