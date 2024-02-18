import '@/components/BottomTabs/BottomTabs.scss'
import NavigationIcon from '@/components/NavigationIcon/NavigationIcon'

export default function BottomTabs() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 flex h-16 justify-around overflow-hidden bg-mint-cream md:h-0">
      <NavigationIcon iconName="home" to="/" />
      <NavigationIcon iconName="about" to="/about" />
      <NavigationIcon iconName="contact" to="/contact" />
      <NavigationIcon iconName="projects" to="/projects" />
    </nav>
  )
}
