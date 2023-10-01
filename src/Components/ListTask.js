import React from 'react'

export default function ListTask() {
    return (
            <tr>
                <td className="text-center">3</td>
                <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                    ea c
                </td>
                <td className="text-center">
                    <span className="label label-info">Medium</span>
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
