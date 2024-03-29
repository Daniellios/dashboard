import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Icon from "@mui/material/Icon"
import sideBarItems from "../../constants/sidebarItems"

const Sidebar = ({ admin, user, agent }: Props) => {
  const router = useRouter()

  // CHANGE ARRAYS WIITH USE EFFECT OR USE STATE
  // const [role, setRole] = useState(props.currentRole)
  // IN RENDER - role === sidebarItemsArr ? arr.map() : ''

  return (
    <div className="hidden h-full w-full tabletlg:flex max-w-[220px] tablet:pr-2 desktop:max-w-[290px] pr-5 pt-10 static left-0 top-8  border-r-2 border-white">
      <ul className="flex flex-col gap-4 tablet:w-full">
        {/* USER LAYOUT */}
        {user
          ? sideBarItems[0].map((item: any, index: number) => {
              return (
                <Link href={item.href} key={item.title + index}>
                  <li
                    className={
                      router.asPath === item.href
                        ? "sidebar-active"
                        : "sidebar-inactive"
                    }
                  >
                    <div className="flex justify-start items-center space-x-4 ">
                      <Icon className="text-white w-6 h-6"> {item.icon} </Icon>
                      <p className="text-white capitalize"> {item.title}</p>
                    </div>
                    {item.notifications ? (
                      <div
                        className={
                          router.asPath === item.href
                            ? "notification-active"
                            : "notification-inactive"
                        }
                      >
                        25
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </Link>
              )
            })
          : ""}

        {/* AGENT LAYOUT */}
        {agent
          ? sideBarItems[1].map((item: any, index: number) => {
              return (
                <Link href={item.href}>
                  <li
                    key={item.title + index}
                    className={
                      router.asPath === item.href
                        ? "sidebar-active"
                        : "sidebar-inactive"
                    }
                  >
                    <div className="flex justify-start items-center space-x-4 ">
                      <Icon className="text-white w-6 h-6"> {item.icon} </Icon>
                      <p className="text-white capitalize"> {item.title}</p>
                    </div>
                    {item.notifications ? (
                      <div
                        className={
                          router.asPath === item.href
                            ? "notification-active"
                            : "notification-inactive"
                        }
                      >
                        25
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </Link>
              )
            })
          : ""}
        {/* ADMIN LAYOUT */}
        {admin
          ? sideBarItems[2].map((item: any, index: number) => {
              return (
                <Link href={item.href}>
                  <li
                    key={item.title + index}
                    className={
                      router.asPath === item.href
                        ? "sidebar-active"
                        : "sidebar-inactive"
                    }
                  >
                    <div className="flex justify-start items-center space-x-4 ">
                      <Icon className="text-white w-6 h-6"> {item.icon} </Icon>
                      <p className="text-white capitalize"> {item.title}</p>
                    </div>
                    {item.notifications ? (
                      <div
                        className={
                          router.asPath === item.href
                            ? "notification-active"
                            : "notification-inactive"
                        }
                      >
                        25
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </Link>
              )
            })
          : ""}
      </ul>
    </div>
  )
}

export default Sidebar
