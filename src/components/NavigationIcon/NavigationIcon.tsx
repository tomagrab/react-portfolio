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
    <Link to={to} className="flex h-full w-1/4 items-center justify-center">
      {IconComponent ? <IconComponent /> : '?'}
    </Link>
  )
}
