
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


function App() {  
     if(!localStorage.getItem('username'))
     {
       return  <LoginForm/>
     }
    return (

     
        <div>
            <ChatEngine
            height="100vh"
            projectID="Project_ID"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            />
        </div>
    )
}

export default App
