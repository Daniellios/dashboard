import React from "react"
import MessageForm from "./MessageForm"
import Message from "./Message"

const Chat = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end p-2 gap-8 overflow-y-hidden">
      {/* MESSAGE LIST */}
      <div className="flex flex-col space-y-4 px-4 overflow-y-auto scrollbar">
        <Message isMine></Message>
        <Message></Message>
        <Message isMine></Message>
        <Message></Message>
        <Message isMine></Message>
        <Message isMine></Message>
        <Message></Message>
        <Message isMine></Message>
      </div>
      <MessageForm></MessageForm>
    </div>
  )
}

export default Chat
