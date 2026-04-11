import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sbrdiagnostic.com';
  const lastModified = new Date();

  return [
    { url: `${baseUrl}`, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
