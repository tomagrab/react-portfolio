import '@/components/Layout/Layout.scss'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Header from '@/components/Layout/Header/Header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

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
    <div className="layout flex w-full">
      <Navbar />
      <div className="layout__main flex-1">
        <Header />
        <div className="layout__main--outer bg-slate-200 p-4">
          <ScrollArea className="layout__main--inner w-full rounded bg-mint-cream p-4 shadow-xl">
            {pageName && pageName === 'Blog' ? (
              <BlogHeader />
            ) : (
              <h1 className=" text-3xl font-bold">{pageName}</h1>
            )}
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

function BlogHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Blog</h1>
      <NavLink to="/Blog/NewBlog">
        <Badge className="cursor-pointer">New</Badge>
      </NavLink>
    </div>
  )
}
