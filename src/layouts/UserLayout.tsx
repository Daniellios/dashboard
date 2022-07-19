import React, { ReactNode } from "react"
import Sidebar from "../components/SideBar/Sidebar"
import Header from "../components/Header/Header"
import { useRouter } from "next/router"

const UserLayout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <>
      <Header />
      <div className="flex h-full">
        <Sidebar user />
        <div className="w-full h-full mx-8 tablet:mx-16 my-12 flex flex-col text-white ">
          <div className="w-full flex flex-col gap-6">{children}</div>
        </div>
      </div>
    </>
  )
}

export default UserLayout
