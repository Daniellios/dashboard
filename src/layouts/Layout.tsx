import React from "react"
import Link from "next/link"
import Header from "../components/Header/Header"
import Sidebar from "../components/SideBar/Sidebar"
import { Head } from "../components/Head/Head"

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="h-screen overflow-y-visible overflow-x-hidden bg-main-bg">
        {children}
      </main>
    </>
  )
}

export default Layout
