import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Chat from './Chat';

function App() {
    return (
        <Routes>
            <Route path='/' element={<h1>Hello</h1>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route path='/chat' element={<Chat />}/>
        </Routes>
    );
}

export default App;
