import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/dashboard/list'>List</Link></li>
                    <li><Link to='/dashboard/search'>Search</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/list' element={<h1>List</h1>} />
                <Route path='/search' element={<h1>Search</h1>} />
            </Routes>
        </>
    )
}

export default Dashboard