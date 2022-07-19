import Image from "next/image"
import React, { useState } from "react"
import Contact from "./Contact"

const Contacts = () => {
  return (
    <div className="h-full w-[80px] tablet:min-w-[140px] tabletlg:w-1/4 border-r-2 border-white">
      {/* HEADER */}
      <div className="flex items-center justify-start  py-4 tablet: border-b-2 border-white">
        <Contact isSelf></Contact>
      </div>
      {/* LIST */}
      <div className="flex flex-col h-full pt-4 gap-4">
        <Contact></Contact>
        <Contact></Contact>
        <button className="w-full bg-pink-br flex items-center justify-center p-4 rounded-bl-lg text-xs  ">
          New Trade?
        </button>
      </div>
    </div>
  )
}

export default Contacts
