import React from "react"
import OverviewHeader from "./OverviewHeader"
import OverviewChart from "./OverviewChart"
import Conversions from "./Conversions"

const Overview = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <OverviewHeader></OverviewHeader>
      <div className="w-full flex justify-between h-[164px] gap-11">
        <OverviewChart></OverviewChart>
        <OverviewChart></OverviewChart>
        <OverviewChart></OverviewChart>
      </div>
      <Conversions></Conversions>
    </div>
  )
}

export default Overview
