type Props = {
  children?: ReactNode
  title?: string
  pageName?: string
  admin?: boolean
  user?: boolean
  agent?: boolean
  calendar?: boolean
}

interface ISidebarLink {
  href: string
  title: string
  icon?: any
  notifications?: boolean
}

interface IContact {
  isSelf?: boolean
  openSideMenu?: any
  isHeader?: any
}

interface IMessage {
  isMine?: boolean
}
