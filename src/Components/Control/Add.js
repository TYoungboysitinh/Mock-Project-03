import React from 'react'

export default function Add({onAddTask}) {
    // Hàm xử lý sự kiện khi người dùng click vào nút Add Task 
    const handleAdd = () => {
        onAddTask(true, "Save", null);
    }

    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block" onClick={handleAdd}>
                Add Task
            </button>
        </div>
    )
}
