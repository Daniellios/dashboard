import React, { ReactNode } from "react"
import { Head } from "../components/Head/Head"
import Sidebar from "../components/SideBar/Sidebar"
import Header from "../components/Header/Header"
const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Head title={"Admin"} />
      <Header admin />
      <Sidebar admin />
      <div>{children}</div>
    </>
  )
}

export default AdminLayout
