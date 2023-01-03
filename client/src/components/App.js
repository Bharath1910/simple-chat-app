import { Routes, Route } from 'react-router-dom';
import Register from './Register';

function App() {
    return (
        <Routes>
            <Route path='/' element={<h1>Hello</h1>}/>
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}

export default App;
