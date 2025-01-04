export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Asian Scales",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "your-phone",
    "contactType": "customer service"
  }
});

export const generateProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.images[0],
  "category": product.category
});
