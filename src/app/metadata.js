export const defaultMetadata = {
  title: 'Asian Scales Blog',
  description: 'Discover insightful articles about scales, measurements, and industry insights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://asian-scales.vercel.app',
    siteName: 'Asian Scales Blog',
  },
};

export const generateBlogMetadata = (blog) => ({
  title: `${blog.title} | Asian Scales Blog`,
  description: blog.description?.replace(/<[^>]*>/g, '').slice(0, 155) || defaultMetadata.description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title: blog.title,
    description: blog.description?.replace(/<[^>]*>/g, '').slice(0, 155),
    images: blog.coverImage ? [{ url: blog.coverImage }] : [],
    type: 'article',
    article: {
      publishedTime: blog.date,
      authors: [blog.author],
      tags: [blog.category],
    },
  },
}); 