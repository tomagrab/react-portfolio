import '@/components/Navbar/Navbar.scss'
import NavigationIcon from '../NavigationIcon/NavigationIcon'

export default function Navbar() {
  return (
    <aside className="sidebar absolute bottom-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-around overflow-hidden bg-mint-cream md:static md:h-screen md:w-20 md:flex-col md:justify-normal md:gap-4 md:shadow-xl">
      <div className="hidden h-16 w-full items-center justify-center bg-celestial-blue md:flex">
        <h2 className="sidebar-icon text-lg text-mint-cream">TG</h2>
      </div>
      <NavigationIcon iconName="blog" to="/" />
      <NavigationIcon iconName="about" to="/About" />
      <NavigationIcon iconName="contact" to="/Contact" />
      <NavigationIcon iconName="projects" to="/Projects" />
    </aside>
  )
}
