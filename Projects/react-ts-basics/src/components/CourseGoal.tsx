interface CourseGoalsProp{
  title: string;
  description: string
  onDelete: (id: number) => void 
  id: number
}

export default function CourseGoal({ id, title, description, onDelete}: CourseGoalsProp){
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  ) 
}