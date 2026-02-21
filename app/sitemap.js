import { getCategoryPaths } from '../lib/categories'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://supreme-autoparts.com'

export default function sitemap() {
  const categoryPaths = getCategoryPaths()
  const categoryUrls = categoryPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path.split('/').length === 3 ? 0.9 : 0.8
  }))
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/c`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    ...categoryUrls
  ]
}
