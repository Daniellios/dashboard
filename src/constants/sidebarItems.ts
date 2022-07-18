const userSetup: ISidebarLink[] = [
  {
    href: "/user",
    title: "Overview",
    icon: "visibility",
  },
  {
    href: "/user/trade",
    title: "trade",
    icon: "chatBubble",
    notifications: true,
  },
  {
    href: "/user/wallet",
    title: "wallet",
    icon: "account_balance_wallet",
  },
  {
    href: "/user/transactions",
    title: "transactions",
    icon: "currency_exchange",
    notifications: true,
  },
  {
    href: "/user/statistics",
    title: "statistics",
    icon: "analytics",
  },
  {
    href: "/user/referral",
    title: "Referral",
    icon: "discount",
  },
  {
    href: "/user/logout",
    title: "Logout",
    icon: "logout",
  },
]

const agentSetup = [
  {
    href: "/agent",
    title: "Overview",
    icon: "visibility",
  },
  {
    href: "/agent/users",
    title: "users",
    icon: "person",
  },
  {
    href: "/agent/trade",
    title: "trade",
    icon: "chatBubble",
    notifications: true,
  },
  {
    href: "/agent/wallet",
    title: "Wallet",
    icon: "account_balance_wallet",
  },
  {
    href: "/agent/transactions",
    title: "Transactions",
    icon: "currency_exchange",
    notifications: true,
  },
  {
    href: "/agent/statistics",
    title: "Statistics",
    icon: "analytics",
  },
  {
    href: "/agent/settings",
    title: "settings",
    icon: "settings",
  },
  {
    href: "/agent/logout",
    title: "logout",
    icon: "logout",
  },
]

const adminSetup = [
  {
    href: "/admin",
    title: "Overview",
    icon: "visibility",
  },
  {
    href: "/admin/users",
    title: "users",
    icon: "person",
  },
  {
    href: "/admin/agents",
    title: "agents",
    icon: "supervised_user_circle",
  },
  {
    href: "/admin/cards",
    title: "cards",
    icon: "credit_card",
    notifications: true,
  },
  {
    href: "/admin/currencies",
    title: "currencies",
    icon: "monetization_on",
  },
  {
    href: "/admin/trade",
    title: "trade",
    icon: "chatBubble",
  },
  {
    href: "/admin/payments",
    title: "payments",
    icon: "payments",
    notifications: true,
  },
  {
    href: "/admin/transactions",
    title: "transactions",
    icon: "currency_exchange",
  },
  {
    href: "/admin/statistics",
    title: "statistics",
    icon: "analytics",
  },
  {
    href: "/admin/logout",
    title: "logout",
    icon: "logout",
  },
]

const sideBarItems: any = [userSetup, agentSetup, adminSetup]

export default sideBarItems
