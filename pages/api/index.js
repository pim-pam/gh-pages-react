import pages from '../../public/content/pages.json'

const allContent = {
  pages,
}

export default function handler(req, res) {
  res.end(JSON.stringify(allContent))
}