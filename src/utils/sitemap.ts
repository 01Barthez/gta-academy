
export const generateSitemap = () => {
  const baseUrl = 'https://academy.gta-it';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/training', priority: '0.9', changefreq: 'weekly' },
    { url: '/training/certified', priority: '0.8', changefreq: 'monthly' },
    { url: '/training/holidays', priority: '0.8', changefreq: 'monthly' },
    { url: '/training/enterprise', priority: '0.8', changefreq: 'monthly' },
    { url: '/training/personalized', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/training/holidays/modules/module1', priority: '0.6', changefreq: 'monthly' },
    { url: '/training/holidays/modules/module2', priority: '0.6', changefreq: 'monthly' },
    { url: '/training/holidays/modules/module3', priority: '0.6', changefreq: 'monthly' },
    { url: '/training/holidays/modules/module4', priority: '0.6', changefreq: 'monthly' },
    { url: '/legal', priority: '0.4', changefreq: 'yearly' },
    { url: '/privacy', priority: '0.4', changefreq: 'yearly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
