import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/experience`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/expertise`, lastModified: new Date(), priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE_URL}/disclaimer`, lastModified: new Date(), priority: 0.3 },
  ]
}
