import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
    return (
        <Routes>
            <Route path='/' element={<h1>Hello</h1>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
    );
}

export default App;
