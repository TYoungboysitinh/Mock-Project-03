import React from 'react'
import ListTask from './ListTask'

function List({renderTasks, onEdit, onDelete}) {
    
    // Hàm xử lý sự kiện cho chức năng Edit
    const handleEdit = (toggle, actionName, task) => {
        onEdit(toggle, actionName, task);
    }

    // Hàm xử lý sự kiện cho chức năng Delete
    const handleDelete = (task) =>{
        onDelete(task)
        console.log(renderTasks);
    }

    // Tạo ra Task từ danh sách
    let elementTask = renderTasks.map((item, index) => (
        <ListTask key={item.taskId} renderTask={item} rollNo={index + 1} 
          onEdit={handleEdit} onDelete={handleDelete}
        />
      ));
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementTask}
                </tbody>
            </table>
        </div>
    )
}

export default List
