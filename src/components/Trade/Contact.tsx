import Image from "next/image"
import React, { useState } from "react"

const Contact = ({ isSelf, openSideMenu, isHeader }: IContact) => {
  const [isOnline, setIsOnline] = useState(true)
  const [msgQty, setMsgQty] = useState(20)
  const [isTyping, setIsTyping] = useState(false)

  const handleSideBar = () => {
    openSideMenu(false)
  }

  return (
    <div
      onClick={isSelf || isHeader ? undefined : handleSideBar}
      className="w-full flex px-2 items-center tablet:flex-row tablet:items-center justify-start gap-4 tablet:pr-4 "
    >
      {/* PROFILE PIC */}
      <div className=" relative w-9 h-9 ">
        <Image
          className="rounded-full"
          src={"/images/profile2.jpg"}
          width={"36px"}
          height={"36px"}
          layout="fixed"
        />
        {/* STATUS CIRCLE */}
        <div
          className={
            isOnline
              ? "absolute right-0 bottom-0 w-[10px] h-[10px] bg-green-400 rounded-full"
              : "absolute right-0 bottom-0 w-[10px] h-[10px] bg-gray-400 rounded-full"
          }
        ></div>
        {isSelf ? (
          ""
        ) : msgQty > 1 ? (
          <div className="notification-inactive absolute -top-1 -right-2 desktop:hidden">
            {msgQty}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* PROFILE INFO  */}
      <div className="w-full tablet:flex justify-between items-end gap-2">
        {/* LEFT BOX */}
        <div className="flex flex-col tablet:items-start justify-center gap-1">
          <h4 className="text-left text-xs tablet:text-left">
            Daniel Blinnikov
          </h4>
          <p className="text-[10px] font-thin capitalize">
            Agent
            {/* {isOnline ? "online" : "offline"} */}
          </p>
        </div>
        {/* RIGHT BOX */}
        {isSelf ? (
          ""
        ) : (
          <div className="hidden desktop:flex items-end">
            {isTyping ? <p className=" text-[10px]">typing...</p> : ""}
            {msgQty > 1 && !isTyping ? (
              <div className="notification-inactive">{msgQty}</div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
