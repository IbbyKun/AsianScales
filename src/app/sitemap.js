import { fetchProducts, fetchBlogs } from '../firebaseFunctions'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

  // Get dynamic data
  const products = await fetchProducts()
  const blogs = await fetchBlogs()

  // Base routes
  const routes = ['', '/blogs', '/contact', '/services/weighing', '/services/automation', '/services/trading']
    .map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    }))

  // Product routes
  const productUrls = products.map(product => ({
    url: `${baseUrl}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Blog routes
  const blogUrls = blogs.map(blog => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.lastModified || blog.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...routes, ...productUrls, ...blogUrls]
}
