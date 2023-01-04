import React, { useEffect, useState } from 'react';
import cookies from 'js-cookie';

const toUser = "bob";

function Chat() {
    const token = cookies.get('token');
    
    const [chatData, setChatData] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5500/api/getData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                token,
                toUser
            })
        })
        .then(responce => responce.json())
        .then(data => {
            console.log(data)
            setChatData(data.data)
        })
    }, [])

    console.log(chatData)

    return (
        <>
            <div>
                {chatData.map(text => {
                    if (text.loc === 0) {
                        return (
                            <p style={{color: 'green'}}>{text.text}</p>
                        )
                    } else {
                        return (
                            <p style={{color: 'red'}}>{text.text}</p>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Chat