import '@/components/Layout/Layout.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <ScrollArea className="h-[calc(100vh-4rem)] w-full border p-4 text-mint-cream md:h-screen">
          <h1 className="text-4xl font-bold">Hello, world!</h1>
          <p className="text-xl">
            This is a simple example of a layout with a sidebar and bottom tabs.
          </p>
          <p className="text-xl">
            The sidebar is hidden on small screens and the bottom tabs are
            hidden on large screens.
          </p>
          <p className="text-xl">
            The sidebar and bottom tabs are both fixed to the screen.
          </p>
          <p className="text-xl">The main content area is scrollable.</p>
        </ScrollArea>
      </div>
    </div>
  )
}
