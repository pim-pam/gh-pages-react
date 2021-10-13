import pages from '../../../public/content/pages.json'

export default function handler(req, res) {
  const [slugRequest] = req.query.slug
  if (!slugRequest) return res.end()
  const pageBySlug = pages.find(({ slug }) => slug.en === slugRequest)
  if (!pageBySlug) return res.end()
  res.end(JSON.stringify(pageBySlug))
}