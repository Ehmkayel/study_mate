import { type FormEvent } from "react"

const NewGoal = () => {
  function handleSubmit (e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    new FormData(e.currentTarget)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text'/>
      </p>
      <p>
        <label htmlFor='summary'>Summary</label>
        <input id='summary' type='text'/>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    
    </form>
  )
}

export default NewGoal