import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Information */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="shadcn ui, shadcn ui Marketplace, UI Kits, UI Styles, shadcn ui Components, Web Design, Frontend UI, shadcn ui styles, shadcn ui kits, ShadCN UI, ShadCN UI Marketplace, Frontend UI, Design System, TailwindCSS, CSS, HTML, JavaScript, TypeScript"
        />
        <meta
          name="description"
          content="Marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        <meta name="author" content="Abdelmuttalib Ahmed" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.shadcn-ui-marketplace.com/"
        />
        <meta
          property="og:title"
          content="ShadCN UI Kits Marketplace - Premium ShadCN Styles"
        />
        <meta
          property="og:description"
          content="Discover the best ShadCN UI kits and styles for modern web design."
        />
        <meta property="og:image" content="/images/social-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.shadcn-ui-marketplace.com/"
        />
        <meta
          property="twitter:title"
          content="ShadCN UI Kits Marketplace - Premium ShadCN Styles"
        />
        <meta
          property="twitter:description"
          content="Discover the best ShadCN UI kits and styles for modern web design."
        />
        <meta property="twitter:image" content="/images/social-preview.jpg" />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
