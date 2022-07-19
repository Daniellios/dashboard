import React from "react"
import OverviewChart from "./OverviewChart"
import Conversions from "./Conversions"

const Overview = () => {
  return (
    <>
      <div className="w-full flex justify-between h-[164px] gap-11">
        <OverviewChart></OverviewChart>
        <OverviewChart></OverviewChart>
        <OverviewChart></OverviewChart>
      </div>
      <Conversions></Conversions>
    </>
  )
}

export default Overview
