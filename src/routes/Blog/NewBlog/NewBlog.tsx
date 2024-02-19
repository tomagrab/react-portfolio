import '@/routes/Blog/NewBlog/NewBlog.scss'
import NewBlogForm from '@/components/Blog/NewBlog/NewBlogForm/NewBlogForm'
import { SignedIn, useUser } from '@clerk/clerk-react'
import { redirect } from 'react-router-dom'

export default function NewBlog() {
  const user = useUser().user
  const isSignedIn = useUser().isSignedIn

  if (!isSignedIn) {
    return redirect('/')
  }

  const userEmail = user?.emailAddresses[0]?.emailAddress
  const isAdministrator = userEmail === import.meta.env.VITE_ADMIN_EMAIL

  if (!isAdministrator) {
    return redirect('/')
  }

  return (
    <SignedIn>
      {isAdministrator && isSignedIn ? (
        <div>
          <NewBlogForm />
        </div>
      ) : null}
    </SignedIn>
  )
}
