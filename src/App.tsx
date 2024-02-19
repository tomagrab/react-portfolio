import '@/App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Blog from '@/routes/Blog/Blog'
import NewBlog from '@/routes/Blog/NewBlog/NewBlog'
import About from '@/routes/About/About'
import Contact from '@/routes/Contact/Contact'
import Projects from '@/routes/Projects/Projects'
import LogIn from '@/routes/SignIn/SignIn'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blog />} />
        <Route path="/Blog/NewBlog" element={<NewBlog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}
