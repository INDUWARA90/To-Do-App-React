import './componets.css'
import { tasks as taskArray } from '../data/task'


function TaskComponet({ task, index }) {



  function handeldelete() {

    taskArray.splice(index, 1);
    localStorage.setItem('TasksList', JSON.stringify(taskArray));
    window.location.reload(true);

  }

  

  return (
    <>
      <div className='Task-to-do'>
    
        <p className='task-name'>{task}</p>
        <button onClick={handeldelete}>Remove</button>
      </div>
    </>
  )
}

export default TaskComponet