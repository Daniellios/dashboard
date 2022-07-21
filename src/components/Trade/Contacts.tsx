import Image from "next/image"
import React, { useState } from "react"
import Contact from "./Contact"
import MenuIcon from "@mui/icons-material/Menu"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const Contacts = () => {
  const [isListOpen, setIsOpen] = useState(false)

  const openSideMenu = (listStatus: boolean) => {
    setIsOpen(listStatus)
  }

  return (
    <div className="h-16 flex flex-row w-full border-b-2 tablet:flex-col tablet:h-full tablet:w-[80px] tablet:min-w-[140px] tablet:border-r-2 tablet:border-b-0 tablet:max-w-[unset]  tabletlg:w-1/4  border-white">
      {/* HEADER */}
      <div className="flex static items-center z-[0] justify-center py-2 pr-2 tablet:border-r-0 tablet:border-b-2 border-white">
        <button onClick={() => openSideMenu(true)}>
          <ArrowBackIcon className="inline-block tablet:hidden"></ArrowBackIcon>
        </button>
        <Contact isSelf></Contact>
      </div>
      {/* LIST */}
      <div className={isListOpen ? "contacts-open" : "contacts-closed"}>
        <div className="flex flex-col h-[calc(100%_-_3rem)] gap-4 py-4 mr-1 overflow-y-auto tablet:px-0 scrollbar">
          <Contact openSideMenu={openSideMenu}></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
        </div>
        <button className="w-full bg-pink-br flex self-end items-center justify-center p-4 rounded-bl-lg text-xs sticky bottom-0">
          New Trade?
        </button>
      </div>
    </div>
  )
}

export default Contacts
