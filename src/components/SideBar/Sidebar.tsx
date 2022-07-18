import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Icon from "@mui/material/Icon"
import sideBarItems from "../../constants/sidebarItems"

const Sidebar = ({ admin, user, agent }: Props) => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  return (
    <div className="h-full max-w-[290px] w-full pr-5 pt-10 sticky left-0 top-8  border-r-2 border-white">
      <ul className="flex flex-col gap-4 ">
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
