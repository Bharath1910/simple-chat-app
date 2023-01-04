import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import List from './List';
import Search from './Search';


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
                <Route path='/list' element={<List />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </>
    )
}

export default Dashboard