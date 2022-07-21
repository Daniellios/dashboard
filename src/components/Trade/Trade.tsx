import React from "react"
import Chat from "./Chat"
import Contacts from "./Contacts"

const Trade = () => {
  return (
    <div className="flex flex-col overflow-x-auto overflow-y-hidden relative tablet:flex-row max-h-[686px] border-2 border-white rounded-lg min-w-[375px]">
      <Contacts></Contacts>
      <Chat></Chat>
    </div>
  )
}
// px-10 pt-10 pb-20
export default Trade
