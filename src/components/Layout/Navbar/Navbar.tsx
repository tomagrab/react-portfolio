import '@/components/Layout/Navbar/Navbar.scss'
import NavigationIcon from '@/components/Layout/Navbar/NavigationIcon/NavigationIcon'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
  return (
    <aside className="sidebar absolute bottom-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-around overflow-hidden bg-mint-cream md:static md:h-screen md:w-20 md:flex-col md:justify-normal md:gap-4 md:shadow-xl">
      <div className="hidden h-16 w-full items-center justify-center bg-celestial-blue md:flex">
        <h2 className="sidebar-icon text-lg text-mint-cream">TG</h2>
      </div>
      <NavigationIcon iconName="blog" to="/" />
      <NavigationIcon iconName="about" to="/About" />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <NavigationIcon iconName="login" to="/LogIn" />
      </SignedOut>
      <NavigationIcon iconName="contact" to="/Contact" />
      <NavigationIcon iconName="projects" to="/Projects" />
    </aside>
  )
}
