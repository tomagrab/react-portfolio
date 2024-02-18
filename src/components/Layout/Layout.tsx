import '@/components/Layout/Layout.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import BottomTabs from '@/components/BottomTabs/BottomTabs'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <div>
          <BottomTabs />
        </div>
      </div>
    </div>
  )
}
