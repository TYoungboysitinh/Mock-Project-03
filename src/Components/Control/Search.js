import React, { useState } from 'react'

export default function Search({onSearch}) {

    // Chức năng tìm kiếm 
    const [searchEngine, setSearchEngine] = useState('');
    const handleSearch = () => { 
        onSearch(searchEngine);
    };



    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    onChange={(e)=>setSearchEngine(e.target.value)}
                />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={handleSearch}>
                        Go!
                    </button>
                </span>
            </div>
        </div>
    )
}
