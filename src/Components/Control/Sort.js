// import React, { useState } from 'react'

// export default function Sort({onSort}) {

//     const [sortType, setSortType] = useState('name');
//     const [sortOrder, setSortOrder] = useState('ascending');

//     const handleSortTypeChange = (event) => {
//         setSortType(event.target.value);
//     };

//     const handleSortOrderType = (event) => {
//         setSortOrder(event.target.value);
//     };

//     const handleSort = () => {
//         onSort(sortType, sortOrder)
//     }

//     return (
//         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
//             <div className="dropdown">
//                 <button
//                     className="btn btn-default dropdown-toggle"
//                     type="button"
//                     id="dropdownMenu1"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="true"
//                 >
//                     Sort by {sortType === 'name' ? 'Name' : 'Level'} - {sortOrder === 'ascending' ? 'ASC' : 'DESC'} <span className="caret" />
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
//                     <li>
//                         <a role="button" onClick={()=>handleSortTypeChange({target: {value: 'name'} })}>Name ASC</a>
//                     </li>
//                     <li>
//                         <a role="button" onClick={()=>handleSortTypeChange({target: {value: 'name'} })}>Name DESC</a>
//                     </li>
//                     <li role="separator" className="divider" />
//                     <li>
//                         <a role="button" onClick={()=>handleSortOrderType({target: {value: 'level'} })}>Level ASC</a>
//                     </li>
//                     <li>
//                         <a role="button" onClick={()=>handleSortOrderType({target: {value: 'level'} })}>Level DESC</a>
//                     </li>
//                 </ul>
//                 <button className='btn btn-info' type='button' onClick={handleSort}> Sort </button>
                
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';

export default function Sort({ onSort }) {
  const [sortType, setSortType] = useState('name');
  const [sortOrder, setSortOrder] = useState('ascending');

  const handleSortTypeChange = (event) => {
    setSortType(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSort = () => {
    onSort(sortType, sortOrder);
  };

  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="form-group">
        <label>Sắp xếp theo:</label>
        <select
          className="form-control"
          value={sortType}
          onChange={handleSortTypeChange}
        >
          <option value="name">Tên</option>
          <option value="level">Cấp độ</option>
        </select>
      </div>
      <div className="form-group">
        <label>Thứ tự sắp xếp:</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="ascending"
              checked={sortOrder === 'ascending'}
              onChange={handleSortOrderChange}
            />
            Tăng dần
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="descending"
              checked={sortOrder === 'descending'}
              onChange={handleSortOrderChange}
            />
            Giảm dần
          </label>
        </div>
      </div>
      <button className="btn btn-info" type="button" onClick={handleSort}>
        Sắp xếp
      </button>
    </div>
  );
}
