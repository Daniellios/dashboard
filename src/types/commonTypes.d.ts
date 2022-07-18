type Props = {
  children?: ReactNode
  title?: string
  admin?: boolean
  user?: boolean
  agent?: boolean
}

interface ISidebarLink {
  href: string
  title: string
  icon?: any
  notifications?: boolean
}
