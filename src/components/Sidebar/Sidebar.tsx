import '@/components/Sidebar/Sidebar.scss'
import NavigationIcon from '../NavigationIcon/NavigationIcon'

export default function Sidebar() {
  return (
    <aside className="sidebar absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-around overflow-hidden bg-mint-cream md:static md:h-screen md:w-20 md:flex-col md:justify-normal md:gap-4">
      <div className="hidden h-16 w-full items-center justify-center bg-celestial-blue md:flex">
        <h2 className="sidebar-icon text-lg">TG</h2>
      </div>
      <NavigationIcon iconName="home" to="/" />
      <NavigationIcon iconName="about" to="/about" />
      <NavigationIcon iconName="contact" to="/contact" />
      <NavigationIcon iconName="projects" to="/projects" />
    </aside>
  )
}
