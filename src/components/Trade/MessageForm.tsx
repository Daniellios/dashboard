import React, { useState } from "react"

const MessageForm = () => {
  const [value, setValue] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const text = value.trim()

    setValue("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="static w-full h-12 px-4 py-[7px] flex gap-4 border-2 br-grey-200 rounded-full"
    >
      <input
        className="w-full bg-transparent outline-none"
        placeholder="Start typing here..."
        onSubmit={handleSubmit}
      />
      <button
        className="h-full flex justify-center  items-center rounded-full bg-pink-br px-4 py-2"
        type="submit"
      >
        SEND
      </button>
    </form>
  )
}

export default MessageForm
