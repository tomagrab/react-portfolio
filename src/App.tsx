import '@/App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Home from '@/routes/Home/Home'
import About from '@/routes/About/About'
import Contact from '@/routes/Contact/Contact'
import Projects from '@/routes/Projects/Projects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}
