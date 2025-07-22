import coverImg from "../../Img/cover_img.png";

const seoMetadata = {
  home: {
    title: "Juspher Vergara - Web Developer Portfolio",
    description:
      "Web Developer specializing in React.js, Node.js, and modern web technologies. Explore my projects, experience, and skills in building dynamic web applications.",
    keywords:
      "Developer, Web Developer, React.js, Node.js, JavaScript, TailwindCSS, MERN Stack, Portfolio, Frontend Developer, Backend Developer",
    author: "Juspher Vergara",
    canonical: "https://my-personal-portfolio-jr4y.onrender.com/",
    openGraph: {
      type: "website",
      title: "Juspher Vergara - Web Developer Portfolio",
      description:
        "Web Developer specializing in React.js, Node.js, and modern web technologies. View my latest projects and professional experience.",
      url: "https://my-personal-portfolio-jr4y.onrender.com/",
      siteName: "Juspher Vergara Portfolio",
      image: coverImg,
      imageAlt: "Juspher Vergara - Web Developer",
    },
    twitter: {
      card: "summary_large_image",
      title: "Juspher Vergara - Web Developer Portfolio",
      description:
        "Web Developer specializing in React.js, Node.js, and modern web technologies. Explore my projects and experience.",
      image: coverImg,
      imageAlt: "Juspher Vergara - Web Developer",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Juspher Vergara",
      jobTitle: "Web Developer & Designer",
      description:
        "Web Developer with expertise in React.js, Node.js, and the MERN stack",
      url: "https://my-personal-portfolio-jr4y.onrender.com/",
      sameAs: [
        "https://github.com/Juzpher",
        "https://linkedin.com/in/juspher-vergara",
      ],
      knowsAbout: [
        "React.js",
        "Node.js",
        "JavaScript",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
        "Next.js",
        "HTML",
        "CSS",
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Freelance Web Developer",
      },
    },
  },

  robots: {
    userAgent: "*",
    allow: "/",
    disallow: ["/admin", "/private", "/*.json", "/src/"],
    sitemap: "https://my-personal-portfolio-jr4y.onrender.com/sitemap.xml",
  },

  sitemap: {
    baseUrl: "https://my-personal-portfolio-jr4y.onrender.com",
    pages: [
      {
        url: "/",
        changefreq: "monthly",
        priority: "1.0",
        lastmod: new Date().toISOString().split("T")[0],
      },
    ],
  },
};

export default seoMetadata;
