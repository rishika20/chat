import React from 'react'

function MyMessage({message}) {
    if (message.attachments && message.attachments.length > 0)
    {
        return(
            <img
            src={message.attachments[0].file}
            alt="chat-image"
            className="message-image"
            style={{float:'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float:'right',backgroundColor:'#00ace6',color:'white',marginRight:'18px'}}>
           {message.text}
        </div>
    )
}

export default MyMessage
