import React from 'react'
import SimpleTask from '../simple/simple_task/SimpleTask';
// get tasks as from database
const TaskList = ({ tasks }) => {
    // console.log("here are the tasks: ", tasks);
    return (
        <div className='task-list'>
            {/* For each task in tasks, put info in Task component */}
            {tasks.map((task) => {
                return <SimpleTask key={task._id.$oid} info={task} />
            })}
        </div>   
    );
}

export default TaskList