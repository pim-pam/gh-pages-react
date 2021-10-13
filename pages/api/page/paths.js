import pages from '../../../public/content/pages.json'

export default function handler(req, res) {
  const allPaths = pages.map(page => page.slug.en)
  res.end(JSON.stringify(allPaths))
}