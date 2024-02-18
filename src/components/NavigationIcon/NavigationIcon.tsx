import '@/components/NavigationIcon/NavigationIcon.scss'
import { Link } from 'react-router-dom'
import { AtSign, HelpCircle, Home, NotebookPen } from 'lucide-react'

const IconMap = {
  home: Home,
  about: HelpCircle,
  contact: AtSign,
  projects: NotebookPen,
}

type NavigationIconProps = {
  iconName: keyof typeof IconMap
  to: string
}

export default function NavigationIcon({ iconName, to }: NavigationIconProps) {
  const IconComponent = IconMap[iconName]
  return (
    <Link to={to} className="group relative h-16 w-full">
      {IconComponent ? (
        <IconComponent className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
      ) : (
        '?'
      )}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm capitalize opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        {iconName}
      </div>
    </Link>
  )
}
