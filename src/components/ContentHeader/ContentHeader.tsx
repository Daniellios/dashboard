import React from "react"

import EventAvailableIcon from "@mui/icons-material/EventAvailable"
import { useRouter } from "next/router"

const ContentHeader = ({ title, pageName, calendar }: Props) => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <div className="w-full flex flex-col gap-8 ">
      <div className="w-full flex justify-between items-center">
        <h4 className="font-normal text-sm w-full">{pageName}</h4>
        <div className="hidden  w-full tablet:flex justify-end items-center space-x-4">
          <h4 className="font-semibold text-sm ">Accounts</h4>
          <div className="w-[2px] h-4 bg-white content-none"></div>
          <h4 className="font-normal text-sm  uppercase">Daniel Blinnikov</h4>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold capitalize">{title}</h3>
        {calendar ? (
          <EventAvailableIcon className="text-white w-6 h-6 hover:cursor-pointer" />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default ContentHeader
