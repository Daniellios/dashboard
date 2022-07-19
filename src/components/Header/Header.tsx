import React, { useState } from "react"
import Image from "next/image"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SearchIcon from "@mui/icons-material/Search"

const Header = ({ admin }: Props) => {
  const [notification, setNotification] = useState(25)

  return (
    <div className="w-screen px-8 tablet:px-16 h-20 flex justify-start xxl:justify-center  border-b-2 border-white">
      <div className="w-full max-w-4 h-full space-x-4 flex justify-between  items-center ">
        {/* Left Part Header */}
        <div className="flex  justify-center items-center w-24 space-x-2">
          <Image
            src={"/icons/cloud.svg"}
            width="26px"
            height="20px"
            layout="fixed"
          ></Image>
          <span className="hidden tablet:flex  text-dark-gray font-normal">
            CoinBase
          </span>
        </div>

        {/* Right Part Header*/}
        <div className="flex justify-end items-center gap-8">
          {/* INPUT */}
          <div className="p-[2px] h-10 relative rounded-full flex justify-center items-center bg-gradient-to-b from-pink-br to-blue-br ">
            <SearchIcon className="absolute left-4 text-white" />
            <input
              type="text"
              className="text-white h-full pl-10 rounded-full outline-none flex justify-center items-center bg-main-bg placeholder:text-dark-gray caret-white"
              placeholder="Search e.g card"
            />
          </div>

          {/* Profile */}
          {admin ? (
            <></>
          ) : (
            <>
              <div className="flex justify-center items-center gap-2">
                <Image
                  className="flex justify-center items-center rounded-full"
                  src={"/images/profile2.jpg"}
                  width="36px"
                  height="36px"
                  layout="fixed"
                />
                <p className="hidden tablet:flex text-light-gray">
                  Daniel Blinnikov
                </p>
              </div>
            </>
          )}

          {/* Bell */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex justify-center items-center bg-gradient-to-b from-pink-br to-blue-br text-white text-[10px] ">
              {notification}
            </div>
            <NotificationsIcon className="text-white h-7 w-7"></NotificationsIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
