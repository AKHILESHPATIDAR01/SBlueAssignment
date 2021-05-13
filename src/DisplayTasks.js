import React from 'react'

function DisplayTasks() {
    return (
        <div className="DisplayTasksBox">
            <div className="OuterBox">
                <div className='pic'>A</div>
                <div className='details'>
                    <div className="taskData">Task Data</div>
                    <div className="taskTime">Task Time</div>
                </div>
                <div className='editbtns'>
                    <div className="edit">e</div>
                    <div className="edit">s</div>
                    <div className="edit">d</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayTasks
