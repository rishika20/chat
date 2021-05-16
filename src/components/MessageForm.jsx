import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import {useState} from 'react'
import {sendMessage,isTyping} from 'react-chat-engine'

const MessageForm=(props) =>{
    const [value, setvalue] = useState('')
    const {chatId,creds}=props

    const sHandler=(event)=>
    {
      event.preventDefault()
      const text=value.trim()
      if(text.length>0) { sendMessage(creds,chatId,{text})}
      setvalue('')
    }

    const cHandler=(event)=>
    {
  setvalue(event.target.value)
  isTyping(props,chatId)
    }

    const handler=(e)=>
    {
      sendMessage(creds,chatId,{files: e.target.files,text:''})
    }

    return (
        <form className="message-form" onSubmit={sHandler} >
            <input
            
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={cHandler}
            onSubmit={sHandler}
            />
            <label htmlFor="upload-button">
              <span className="image-button">
                <PictureOutlined className="picture-icon" />
              </span>
            </label>
            <input 
            type="file"
            multiple={false}
            id="upload-button"
            onChange={handler}
            style={{display:'none'}}
            />
            <button className="send-button" type="submit">
              <SendOutlined className="send-icon"/>
            </button>

        </form>
    )
}

export default MessageForm
