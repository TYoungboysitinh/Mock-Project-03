import React, { useEffect, useState } from 'react'

export default function Form({onCancel, renderTask, actionName, onSubmit}) {
    // Hàm xử lý sự kiện Cancel trên Form
    const handleCancel = () => {
        onCancel(false);
    }


    // Nút Submit
    const handleSubmit = (event) => {
        onSubmit(false, actionName, task);

    } 

    // State in form
    const [task, setTask] = useState(renderTask);
    const [saveUpdate, setActionName] = useState(actionName)
    
    // Change in control => Update lại state
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setTask(task=>{
            return{
                ...task,
                [name]:value
            }
        })
    }

    // Khi Component Form đã mouting, khi dữ liệu renderTask thay đổi cập nhật lại Task
    useEffect(()=>{
        setTask(renderTask)
    }, [renderTask])

    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text"
                            name='taskName'
                            className="form-control"
                            value={task.taskName || ""}
                            placeholder="task name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="level"
                            id="inputDs"
                            value={task.level || 2}
                            className="form-control"
                            required="required"
                            onChange={handleChange}
                        >
                            <option value={3}>Small</option>
                            <option value={2}>Medium</option>
                            <option value={1}>High</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        {actionName}
                    </button>
                    <button type="button" className="btn btn-default" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}
