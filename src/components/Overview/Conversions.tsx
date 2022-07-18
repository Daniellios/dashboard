import React from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Conversions = () => {
  return (
    <div className="w-full  flex flex-col gap-8 px-10 py-10 border-2 border-white rounded-lg">
      {/* TABLE HEADER */}
      <div className="w-full flex justify-between items-center">
        <h3 className="font-semibold"> Conversion Rates </h3>
        <MoreHorizIcon className="hover:cursor-pointer" />
      </div>
      {/* TABLE WRAPPER */}
      <div className="w-full flex justify-between items-center">
        {/* TABLE CONTENT */}
        <div className="grid w-full grid-cols-conversion gap-x-8 pr-16 place-content-between">
          {/* TABLE LIST ITEM */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-sm font-semibold text-pink-br">iTunes Card </h4>
            <ul className="w-full flex flex-col gap-4">
              <li className="w-full flex  justify-between items-center  ">
                <p>USA Physical</p>

                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
            </ul>
          </div>
          {/* TABLE LIST ITEM */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-sm font-semibold text-pink-br">iTunes Card </h4>
            <ul className="flex flex-col gap-4">
              <li className="w-full flex  justify-between items-center  ">
                <p>USA Physical</p>

                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
            </ul>
          </div>
          {/* TABLE LIST ITEM */}
          <div className="flex flex-col gap-4 w-full">
            <h4 className="text-sm font-semibold text-pink-br">iTunes Card </h4>
            <ul className="flex flex-col gap-4">
              <li className="w-full flex  justify-between items-center  ">
                <p>USA Physical</p>

                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
              <li className="w-full flex  justify-between items-center ">
                <p>USA Physical</p>
                <p>N400</p>
              </li>
            </ul>
          </div>
        </div>
        {/* ARROW SCROLL */}
        <div className="hover:cursor-pointer p-2 flex justify-center items-center rounded-full  bg-gradient-to-b from-pink-br to-blue-br">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  )
}

export default Conversions
