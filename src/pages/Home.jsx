import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import seoMetadata from "../assets/mock/seo/_metadata";

const Home = () => {
  const { home } = seoMetadata;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{home.title}</title>
        <meta name="title" content={home.title} />
        <meta name="description" content={home.description} />
        <meta name="keywords" content={home.keywords} />
        <meta name="author" content={home.author} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href={home.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={home.openGraph.type} />
        <meta property="og:url" content={home.openGraph.url} />
        <meta property="og:title" content={home.openGraph.title} />
        <meta property="og:description" content={home.openGraph.description} />
        <meta property="og:image" content={home.openGraph.image} />
        <meta property="og:image:alt" content={home.openGraph.imageAlt} />
        <meta property="og:site_name" content={home.openGraph.siteName} />

        {/* Twitter */}
        <meta property="twitter:card" content={home.twitter.card} />
        <meta property="twitter:url" content={home.openGraph.url} />
        <meta property="twitter:title" content={home.twitter.title} />
        <meta
          property="twitter:description"
          content={home.twitter.description}
        />
        <meta property="twitter:image" content={home.twitter.image} />
        <meta property="twitter:image:alt" content={home.twitter.imageAlt} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(home.structuredData)}
        </script>
      </Helmet>

      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
