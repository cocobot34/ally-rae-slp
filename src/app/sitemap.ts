import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://allyraespeech.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://allyraespeech.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://allyraespeech.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://allyraespeech.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://allyraespeech.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: 'https://allyraespeech.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://allyraespeech.com/disclaimer', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
