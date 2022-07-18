import React, { ReactNode } from "react"
import { Head } from "../components/Head/Head"
import Sidebar from "../components/SideBar/Sidebar"

import Header from "../components/Header/Header"

const AgentLayout = ({ children }: Props) => {
  return (
    <>
      <Head title={"Agent"} />
      <Header />
      <Sidebar agent />
      <div>{children}</div>
    </>
  )
}

export default AgentLayout
