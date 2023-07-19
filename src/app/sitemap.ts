import type { MetadataRoute } from "next";
    const sitemap = (): MetadataRoute.Sitemap => {    
    const baseUrl = "https://instant-design-studio.vercel.app";


    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about-us`, lastModified: new Date() },
        { url: `${baseUrl}/packages`, lastModified: new Date() },
        { url: `${baseUrl}/portfolio`, lastModified: new Date() },
        { url: `${baseUrl}/combo-packages`, lastModified: new Date() },
        { url: `${baseUrl}/reviews`, lastModified: new Date() },
        { url: `${baseUrl}/website-development`, lastModified: new Date() },
        { url: `${baseUrl}/logo-design`, lastModified: new Date() },
        { url: `${baseUrl}/ecommerce-solutions`, lastModified: new Date() },
        { url: `${baseUrl}/animation`, lastModified: new Date() },
        { url: `${baseUrl}/illustration`, lastModified: new Date() },
        { url: `${baseUrl}/marketing-collateral`, lastModified: new Date() },
        { url: `${baseUrl}/mobile-apps`, lastModified: new Date() },
        { url: `${baseUrl}/seo-services`, lastModified: new Date() },
        { url: `${baseUrl}/digital-marketing`, lastModified: new Date() },
        { url: `${baseUrl}/creative-copywriting`, lastModified: new Date() },

    ];
};
export default sitemap;