import React from 'react'

const Todo = ({tasks,deleteTask,toggleTask})=>{
    return(
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index} className={task.completed?'completed':''}>
                        <span onClick={()=>toggleTask(index)}>{task.text}</span>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default Todo;