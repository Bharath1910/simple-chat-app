import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';

export default function List() {
    const [connections, setConnection] = useState([])

    const token = cookies.get('token');
    useEffect(() => {
        fetch('http://localhost:5500/api/getConnection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                token
            })
        })
        .then(responce => responce.json())
        .then(data => setConnection(data))
    })
    
    return (
        <>
            {connections.map(connection => {
                    return <p>{connection}</p>
                })}
        </>
    )
}
