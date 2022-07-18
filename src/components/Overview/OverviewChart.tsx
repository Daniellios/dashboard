import React, { useRef, useState } from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import useClickOutside from "../../hooks/clickOutsideHook"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import Image from "next/image"

const OverviewChart = () => {
  const [isHidden, setIsHidden] = useState(true)
  const closeModal = () => {
    setIsHidden(true)
  }

  let domNode = useClickOutside(closeModal)

  const handleModal = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className="flex flex-col justify-start items-end relative w-1/3  h-full pt-4 pl-5 pr-4 pb-10 border-2 border-white rounded-lg ">
      {/* MODAL */}
      <div
        ref={domNode}
        className={
          isHidden
            ? "hidden"
            : "absolute top-9 -right-7 flex flex-col justify-center items-center w-16 h-14 rounded-lg"
        }
      >
        <button className="flex items-center justify-start pl-2 w-full h-1/2 bg-white hover:cursor-pointer rounded-t-lg  text-dark-gray text-xs">
          View
        </button>
        <button className="flex items-center justify-start pl-2 w-full h-1/2 bg-white hover:cursor-pointer hover:bg-pink-br hover:text-white rounded-b-lg text-dark-gray text-xs">
          Delete
        </button>
      </div>
      {/* DOTS */}
      <MoreHorizIcon onClick={handleModal} className="hover:cursor-pointer " />

      {/* CHART */}
      <div className="flex justify-between items-center self-start gap-4 lg:justify-center w-full space-x-8 max-w-xs ">
        <div className="relative flex items-center justify-center">
          <Image src={"/icons/chart.svg"} width={"90px"} height={"90px"} />
          <p className="absolute text-pink-br"> 1500</p>
        </div>

        {/* GRAPH CONTAINER */}
        <div className="w-[128px] flex flex-col gap-4 ">
          <h2 className="text-base font-semibold">
            Total Number Of Transactions
          </h2>
          <div className="w-full flex justify-between items-end">
            <span className="space-x-1 text-green-500">
              30% <ArrowDropUpIcon />
            </span>
            <Image src={"/icons/graph.svg"} width="64px" height="26px" />{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewChart
