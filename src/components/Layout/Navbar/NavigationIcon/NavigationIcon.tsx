import '@/components/Layout/Navbar/NavigationIcon/NavigationIcon.scss'
import { NavLink, useLocation } from 'react-router-dom'
import {
  AtSign,
  HelpCircle,
  Home,
  NotebookPen,
  LogIn,
  LogOut,
} from 'lucide-react'

const IconMap = {
  blog: Home,
  about: HelpCircle,
  contact: AtSign,
  projects: NotebookPen,
  login: LogIn,
  logout: LogOut,
}

type NavigationIconProps = {
  iconName: keyof typeof IconMap
  to: string
}

export default function NavigationIcon({ iconName, to }: NavigationIconProps) {
  const IconComponent = IconMap[iconName]
  const pathname = useLocation().pathname
  return (
    <NavLink
      to={to}
      className={`group relative h-16 w-full ${pathname === to || (pathname.includes(to) && to.length !== 1) ? 'text-celestial-blue' : 'text-slate-900'}`}
    >
      {IconComponent ? (
        <IconComponent className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
      ) : (
        '?'
      )}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm capitalize opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        {iconName}
      </div>
    </NavLink>
  )
}
