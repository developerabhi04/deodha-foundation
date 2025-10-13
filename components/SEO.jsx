// SEO component for meta tags and Open Graph data (UI-only, update per page)
import Head from 'next/head';

export default function SEO({ title, description, image, url }) {
    const siteTitle = 'Deodha Foundation';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Deodha Foundation empowers communities through education, healthcare, and livelihood programs.';
    const defaultImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop';

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || 'https://deodhafoundation.org'} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
