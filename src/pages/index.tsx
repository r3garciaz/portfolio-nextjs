
import { FC, memo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Skills from '../components/Sections/Skills';
import Experience from '../components/Sections/Experience';
// import Projects from '../components/Sections/Projects';
import Contact from '../components/Sections/Contact';
import { homePageMeta } from '../data/data';

const Home: FC = () => {
  const { title, description } = homePageMeta;
  const { asPath: pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://r3garciaz.dev${pathname}`} property="og:url" />
        <meta content="https://r3garciaz.dev/hero-bg.webp" property="og:image" />
        <meta content="website" property="og:type" />

        {/* Modern Meta Tags for PWA/Mobile */}
        <meta name="theme-color" content="#09090b" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://r3garciaz.dev${pathname}`} key="canonical" rel="canonical" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://r3garciaz.dev/hero-bg.webp" name="twitter:image" />

        <link href="/favicon.png" rel="icon" sizes="any" />
        <link href="/icon.png" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Reinaldo García Zúñiga",
              "url": "https://r3garciaz.dev",
              "image": "https://r3garciaz.dev/hero-bg.webp",
              "sameAs": [
                "https://github.com/r3garciaz",
                "https://www.linkedin.com/in/reinaldo-garcia-z/",
                "https://twitter.com/r3garciaz"
              ],
              "jobTitle": "Senior Cloud Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Infosys (BHP)"
              },
              "description": description
            })
          }}
        />

      </Head>

      <div className="flex flex-col min-h-screen bg-dark-950 text-dark-50 selection:bg-primary-500/30 selection:text-white">
        <Header />

        <main className="flex-grow flex flex-col gap-16 md:gap-24 pb-20 pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          {/* <Projects /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default memo(Home);
