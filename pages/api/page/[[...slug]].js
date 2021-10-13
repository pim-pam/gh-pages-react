import pages from '../../../public/content/pages.json'

export default function handler(req, res) {
  const [slugRequest=''] = req.query.slug || []

  const page = pages.find(page => page.slug.en === slugRequest)
  if (!page) return res.end()
  
  res.end(JSON.stringify(page))
}