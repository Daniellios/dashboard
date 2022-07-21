import React from "react"

const Message = ({ isMine }: IMessage) => {
  return isMine ? (
    <div className="flex flex-col gap-4 w-fit self-end items-end">
      <p className="text-gray-500 text-[10px]"> Me, 10 minutes ago</p>
      <div className="min-w-auto max-w-[80%] flex justify-center items-center px-4 py-4 text-xs text-left  bg-white rounded-md text-gray-600 whitespace-wrap">
        Lorem
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-fit self-start items-start">
      <p className="text-gray-500 text-[10px]"> Sender, 10 minutes ago</p>
      <div className="min-w-auto max-w-[80%] flex justify-center items-center px-4 py-4 text-xs text-left  bg-white rounded-md text-gray-600 whitespace-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque
        nulla expedita dolore quasi tempora veniam omnis voluptatum. Quidem
        delectus ut consequatur quae sed voluptatem. Totam, praesentium
        architecto veritatis sed rerum vel neque eius, sint ratione doloribus
        doloremque repellat eos?
      </div>
    </div>
  )
}

export default Message
