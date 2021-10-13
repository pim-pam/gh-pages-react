import { API_URL } from './config'

const Page = ({ slug, blocks, meta }) => (
  <>
    <h1>{blocks.title.en}</h1>
    <p>{blocks.text.en}</p>
  </>
)

export async function getStaticProps(context) {
  const [page] = context.params.page

  try {
    const pageProps = await fetch(`${API_URL}/page/${page}`)
    const props = await pageProps.json()

    return {
      props
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
  
export async function getStaticPaths(context) {
  const pagePathsResponse = await fetch(`${API_URL}/page/paths`)
  const pagePaths = await pagePathsResponse.json()

  const paths = pagePaths.map(path => ({ params: { page: [path] } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default Page