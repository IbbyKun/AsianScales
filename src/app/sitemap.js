import { fetchProducts, fetchBlogs } from '../../firebaseFunctions'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asian-scales.vercel.app'
  const currentDate = new Date().toISOString()

  try {
    // Get dynamic data
    const products = await fetchProducts()
    const blogs = await fetchBlogs()

    // Base routes
    const routes = ['', '/blogs', '/contact', '/services/weighing', '/services/automation', '/services/trading']
      .map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1.0,
      }))

    // Product routes
    const productUrls = products.map(product => ({
      url: `${baseUrl}/${product.slug || product.name.toLowerCase().replace(/ /g, '_')}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

    // Blog routes with safe date handling
    const blogUrls = blogs.map(blog => {
      // Ensure we have valid dates
      let lastMod
      try {
        lastMod = blog.lastModified ? new Date(blog.lastModified).toISOString() 
          : blog.date ? new Date(blog.date).toISOString()
          : currentDate
      } catch (e) {
        lastMod = currentDate
      }

      return {
        url: `${baseUrl}/blogs/${blog.slug || blog.id}`,
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    })

    return [...routes, ...productUrls, ...blogUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return at least the base routes on error
    return routes
  }
}
