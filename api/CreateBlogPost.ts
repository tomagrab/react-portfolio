import { createBlogPost } from './database/prisma'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const { title, content, author } = req.body
      const newPost = await createBlogPost(title, content, author)
      res.status(201).json(newPost)
    } catch (error) {
      res.status(500).json({ error: 'Error creating post' })
    }
  } else {
    res.status(405).end()
  }
}
