import React from "react"

import EventAvailableIcon from "@mui/icons-material/EventAvailable"

const OverviewHeader = () => {
  return (
    <div className="w-full flex flex-col gap-8 ">
      <div className="w-full flex justify-between items-center">
        <h4 className="font-normal text-sm w-full">
          User Management System Overview
        </h4>
        <div className="w-full flex justify-end items-center space-x-4">
          <h4 className="font-semibold text-sm ">Accounts</h4>
          <div className="w-[2px] h-4 bg-white content-none"></div>
          <h4 className="font-normal text-sm  uppercase">Daniel Blinnikov</h4>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold">Overview</h3>
        <EventAvailableIcon className="text-white w-6 h-6 hover:cursor-pointer"></EventAvailableIcon>
      </div>
    </div>
  )
}

export default OverviewHeader
