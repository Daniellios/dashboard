import React from "react"
import Chat from "./Chat"
import Contacts from "./Contacts"

const Trade = () => {
  return (
    <div className="flex h-full border-2 border-white rounded-lg">
      <Contacts></Contacts>
      <Chat></Chat>
    </div>
  )
}
// px-10 pt-10 pb-20
export default Trade
