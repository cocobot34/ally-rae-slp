import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://allyraespeech.com', lastModified: new Date(), priority: 1 },
    { url: 'https://allyraespeech.com/about', lastModified: new Date(), priority: 0.9 },
    { url: 'https://allyraespeech.com/services', lastModified: new Date(), priority: 0.8 },
    { url: 'https://allyraespeech.com/contact', lastModified: new Date(), priority: 0.7 },
    { url: 'https://allyraespeech.com/privacy-policy', lastModified: new Date(), priority: 0.3 },
    { url: 'https://allyraespeech.com/disclaimer', lastModified: new Date(), priority: 0.3 },
  ]
}
