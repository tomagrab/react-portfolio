import '@/components/Layout/Layout.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="bg-slate-200 p-4">
          <ScrollArea className="h-[calc(100vh-6rem)] w-full rounded bg-mint-cream p-4 shadow-xl">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
