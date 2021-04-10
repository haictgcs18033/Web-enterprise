import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Axios from 'axios'
// const socket =io("https://35.224.120.132")
const socket = io("https://35.224.120.132", {
    "transports": ["polling", "websocket"],
    "query": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE1NSwiaWF0IjoxNjE3OTU2OTIyLCJleHAiOjE2MjA1NDg5MjJ9.MJ--DPcgtzrH9iDjdxukRwWl02i-Y0WxTbiiJm9XxLY"
    }
});
export default function ChatApplication() {
    let userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    // setMessage

    const [message] = useState({ message: '', senderId: userLogin.user.id })
    const [chat, setChat] = useState(false)
    // const [ userChat,setUserChat] = useState([])
    useEffect(() => {
        try{
            socket.on("server_message", (data) => {
                // console.log(data);
                setChat(data)
            });
        }catch(err){
            console.log(err);
        }
      
    }, [])
 

  

    // console.log(socket);
    console.log(chat);
    useEffect(() => {
        async function fetchUserChat() {
            try {
               await Axios({
                    url: 'https://35.224.120.132/chat/conversations',
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN') }
                })
                // setUserChat(result.data)
            } catch (err) {
                console.log(err.response?.data);
            }
        }
        fetchUserChat()
    }, [])
    let renderChat = () => {
        // return chat.map(({ id, message, senderId, createAt},index)=>{
        //     return <div key={index}>
        //       <h3> <span>{message}</span></h3>
        //     </div>
        // })
    }
    let handleChangeMessage = (e) => {

    }
    let onMessageSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <div className="card">
                <form onSubmit={onMessageSubmit}>
                    <h1>Message</h1>
                    <div className="name-field">
                        <label>Message</label>
                        <input name="message" value={message.message} onChange={handleChangeMessage} />
                    </div>
                    <button>Send Message</button>
                </form>
                <div className="render-chat">
                    <h1>Chat log</h1>
                    {renderChat()}
                </div>
            </div>
        </div>
    )
}
