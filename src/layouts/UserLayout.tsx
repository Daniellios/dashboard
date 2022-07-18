import React, { ReactNode } from "react"
import { Head } from "../components/Head/Head"
import Sidebar from "../components/SideBar/Sidebar"
import Header from "../components/Header/Header"
import Overview from "../components/Overview/Overview"

const UserLayout = ({ children }: Props) => {
  return (
    <>
      <Head title={"User"} />
      <Header />
      <div className="flex h-full">
        <Sidebar user />
        <div className="w-full h-full  mx-16 my-12 flex flex-col text-white ">
          {children}
        </div>
      </div>
    </>
  )
}

export default UserLayout
