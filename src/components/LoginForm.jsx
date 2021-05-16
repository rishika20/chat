import axios from 'axios'
import React,{useState} from 'react'

function LoginForm() {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')
    const [error, seterror] = useState('')
   
    const handler= async(e)=>
    {
        e.preventDefault()

        const authObject={
             'Project-ID':"4844c183-b0ff-48a9-ba40-c4075062bf9e",
            'User-Name':username,
            'User-Secret':pass}
            try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',username)
            localStorage.setItem('password',pass)

            window.location.reload()
            } catch (error) {
                seterror('Incorrect Credentials')
            }
    }

    return (
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Chat Chat and chat</h1>
               <form onSubmit={handler}>
                   <input 
                   type="text"
                   placeholder="Username"
                   value={username}
                   className="input"
                   onChange={(e)=>setusername(e.target.value)}
                   />

                   <input 
                   type="password"
                   placeholder="Password"
                   value={pass}
                   className="input"
                   onChange={(e)=>setpass(e.target.value)}
                   />
                  <div align="centre">
                   <button type="submit" className="button">
                       <span>Start Chatting</span>
                   </button></div>
               </form>
               <h2 className="error">{error}</h2>
            </div>
            
        </div>
    )
}

export default LoginForm
