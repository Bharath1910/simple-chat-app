import React, { useRef, useState } from 'react';
import cookies from 'js-cookie';

function Login() {
    const [error, setError] = useState(null)

    const user = useRef()
    const pass = useRef()

    function click() {
        const username = user.current.value
        const password = pass.current.value

        console.log(username, password)

        fetch('http://localhost:5500/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(responce => responce.json())
        .then(data => {
            if (data.error) setError(data.error)
            else {
                cookies.set('token', data.token)
            }
        })
    }

    return (
        <>
            <label>
                <p>Username:</p>
                <input ref={user} type="text" />
            </label>

            <label>
                <p>Password: </p>
                <input ref={pass} type="password" />
            </label>

            <button onClick={click}>Login</button>
            {error && <p>{error}</p>}
        </>
    )
}

export default Login