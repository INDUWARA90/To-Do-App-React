import React, { useState } from 'react'
import './componets.css'
import { tasks as taskArray } from '../data/task'
import TaskComponet from './TaskComponet';



function BodyComponet() {

    const [task, setTask] = useState('');


    function handelClick() {

        if (task === '') {
            alert('please Enter Your Tasks...');
            return;
        }

        taskArray.push({ task: task });

        setTask('')
        console.log(taskArray);
    }

    //=====================Save localSotrage==================
    localStorage.setItem('TasksList', JSON.stringify(taskArray));

    const showArray = JSON.parse(localStorage.getItem('TasksList')).map((Element, index) => {

        return <TaskComponet key={index} task={Element.task} index={index} />

    })

    return (
        <>
            <div className='container-to-do'>
                <div className="container-add-to-do">
                    <input type="text"
                        value={task}
                        onChange={(e) => { setTask(e.target.value) }}
                        placeholder='Add your tasks here....'
                    />
                    <button
                        onClick={handelClick}
                    >Add</button>
                </div>

                {showArray}

            </div>
        </>
    )
}



export default BodyComponet