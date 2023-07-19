import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/page/'],
        },
        sitemap: 'https://instant-design-studio.vercel.app/sitemap.xml',
    };
};
export default robots;