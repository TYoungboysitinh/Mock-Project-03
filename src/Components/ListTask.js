import React from 'react'

export default function ListTask({renderTask, rollNo}) {
    let elementLevel = <span className='label label-danger'>High</span>
    if(renderTask.level === 2){
        elementLevel = <span className='label label-info'>Medium</span>
    }else if(renderTask.level === 3){
        elementLevel = <span className='label label-default'>Small</span>
    }
    return (
            <tr>
                <td className="text-center">{rollNo}</td>
                <td>
                    {renderTask.taskName}
                </td>
                <td className="text-center">
                    <span>{elementLevel}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
    )
}
