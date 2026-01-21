
import { FC, memo } from 'react';
import Head from 'next/head';

import Header from '../components/Modern/Layout/Header';
import Footer from '../components/Modern/Layout/Footer';
import Hero from '../components/Modern/Sections/Hero';
import About from '../components/Modern/Sections/About';
import Skills from '../components/Modern/Sections/Skills';
import Experience from '../components/Modern/Sections/Experience';
// import Projects from '../components/Modern/Sections/Projects';
import Contact from '../components/Modern/Sections/Contact';
import { homePageMeta } from '../data/data';

const Home: FC = () => {
  const { title, description } = homePageMeta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* Modern Meta Tags for PWA/Mobile */}
        <meta name="theme-color" content="#09090b" />
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
