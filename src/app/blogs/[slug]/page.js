import { fetchBlog } from '../../../../firebaseFunctions';
import BlogPost from './BlogPost';

export async function generateMetadata({ params }) {
  const blog = await fetchBlog(params.slug);
  
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.description?.slice(0, 155),
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description?.slice(0, 155),
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.lastModified,
      authors: [blog.author],
      images: blog.coverImage ? [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description?.slice(0, 155),
      images: blog.coverImage ? [blog.coverImage] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`,
    }
  };
}

export default function Page() {
  return <BlogPost />;
} 