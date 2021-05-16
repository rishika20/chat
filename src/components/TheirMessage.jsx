import React from 'react'

function TheirMessage({lastMessage,message}) {
    const isFirst=!lastMessage||lastMessage.sender.username!== message.sender.username

    return (
        <div className="message-row">
            {
                isFirst&& (
                    <div
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    />
                )
            }
            { 
            message?.attachments?.length>0  ?     
      (
            <img
            src={message.attachments[0].file}
            alt="chat-image"
            className="message-image"
            style={{marginLeft:isFirst?'4px':'48px'}}
            />
        ):
        (  <div className="message" style={{float:'left',backgroundColor:'whitesmoke',marginLeft:isFirst?'4px':'48px'}}>
        {message.text}
     </div>)
    }
           
        </div>
    )
}

export default TheirMessage
