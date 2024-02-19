import '@/components/Layout/Layout.scss'
import Navbar from '@/components/Navbar/Navbar'
import Header from '@/components/Header/Header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Outlet, useLocation } from 'react-router-dom'

const PageNameMap: Record<string, string> = {
  '/': 'Blog',
  '/About': 'About',
  '/Contact': 'Contact',
  '/Projects': 'Projects',
}

export default function Layout() {
  const pathname = useLocation().pathname

  const pageName = PageNameMap[pathname]

  return (
    <div className="flex min-h-screen w-full">
      <Navbar />
      <div className="flex-1">
        <Header />
        <div className="bg-slate-200 p-4">
          <ScrollArea className="h-[calc(100vh-6rem)] w-full rounded bg-mint-cream p-4 shadow-xl">
            {pageName && (
              <h1 className="mb-4 text-2xl font-bold">{pageName}</h1>
            )}
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
