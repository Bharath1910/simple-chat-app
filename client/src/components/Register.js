import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';

function Register() {
    const [error, setError] = useState()
    const navigate = useNavigate()
    const username = useRef()
    const password = useRef()
    const rePassword = useRef()

    function register() {
        fetch('http://localhost:5500/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value,
                rePassword: rePassword.current.value
            })
        })
        .then(responce => responce.json())
        .then(json => {
            if (json.error) {
                password.current.value = null
                rePassword.current.value = null

                setError(json.error)
                throw new Error(json.error)
            } 
            
            else {
                setError(null)
                cookies.set("token", json.token)
                navigate('/dashboard')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <label>
                <p>Username:</p>
                <input ref={username} type="text" />
            </label>

            <label>
                <p>Password: </p>
                <input ref={password} type="password" />
            </label>

            <label>
                <p>Confirm Password: </p>
                <input ref={rePassword} type="password" />
            </label>
            <button onClick={register}>Register</button>
            {error && <p>{error}</p>}
        </>
    )
}

export default Register