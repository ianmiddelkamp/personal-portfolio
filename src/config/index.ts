import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ian Middelkamp — Software Engineer",
  author: "Ian Middelkamp",
  description:
    "Senior Software Engineer | Full-Stack Development, Databases & Production Infrastructure.",
  lang: "en",
  siteLogo: "/profile-small.jpg",
  navLinks: [
    { text: "Experience", href: "experience-list" },
  /*   { text: "Projects", href: "#projects" }, */
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/ianmiddelkamp/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ian-middelkamp/" },
    { text: "Github", href: "https://github.com/ianmiddelkamp" }
  ],
  socialImage: "zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ian Middelkamp",
    specialty: "Senior Software Engineer",
    summary:
      "Developer based in Toronto, Canada. I specialize in full-stack development, databases, and production infrastructure.",
    email: "ianmmiddelkamp@gmail.com",
  },
  introPageExperienceMin: 1, 
  experience: [
    {
      company: "Monster Property Services Inc.",
      position: "Senior Software Engineer",
      startDate: "Jun 2014",
      endDate: "Present",
      location: "Canada",
      summary: [
        "Led the design, development, and operation of the company’s core office web application, enabling creation and delivery of seasonal service quotes, management of clients and employees, and facilitation of winter service operations. Integrated multiple external APIs to streamline workflows. Stack: PHP, MySQL, Angular.",
        "Developed an employee portal web application to manage onboarding, shift tracking, documents and signatures, memos, leaderboards, training videos, and quizzes, improving operational efficiency, and reducing HR involvement. Stack: PHP, MySQL, Angular.",
        "Built an Android application for plow operators, providing step-by-step job guidance, client service history, and time tracking at each property. Integrated with REST APIs from the office system. Stack: Java, Android.",
        "Delivered mobile employee portal applications for both Android and iOS, enabling shift management, weather response coordination, and equipment maintenance tracking. Stack: Java (Android), Swift (iOS).",
        "Oversaw end-to-end production deployment, maintenance, and optimization across multiple cloud servers, ensuring uptime and reliability during high-demand winter periods.",
        "Introduced structured code reviews and AI-assisted development tools to improve engineering efficiency and code quality."
      ],
    },
    {
      company: "DJRain",
      position: "Irrigation Systems Technician",
      startDate: "Aug 2012",
      endDate: "Jun 2014",
      location: "Greater Toronto Area, Canada",
      summary: [
        "Installed, serviced and repaired sprinkler systems for residential, multi-unit residential, commercial, industrial properties, and athletic fields.",
        "Diagnosed and repaired issues with wiring systems for sprinkler valves and programmed and repaired automated system controllers.",
        "Daily customer service component."
      ],
    },
    {
      company: "Canrain Lawn Sprinklers",
      position: "Lead Foreman and Irrigation Systems Technician",
      startDate: "Apr 2006",
      endDate: "Aug 2012",
      location: "London, Canada Metropolitan Area",
      summary: [
        "Design and provide quotes for sprinkler systems. Manage a team of employees to deliver a finished product on schedule.",
        "Installed, serviced and repaired sprinkler systems for residential, multi-unit residential, commercial, industrial properties, and athletic fields.",
        "Diagnosed and repaired issues with complicated wiring systems for sprinkler valves and programmed, repaired automated system controllers.",
        "Daily customer service component."
      ],
    },
  ],
  projects: [
    /*
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "clone-ig.png",
    }, */
  ],
  about: {
    description: `I’m a senior backend and full-stack engineer with 10+ years of experience building and scaling revenue-critical systems in a growing business environment.

For much of my career, I’ve led and operated the software function within a small but rapidly expanding company — owning everything from architecture and data modeling to production infrastructure and deployment. As the company scaled from under $2.5M to $9M in revenue, I supported 200+ active users, expanded systems into new service lines, and helped double seasonal contract volume.

I’ve worked across PHP, Node.js, Angular, and Android, with deep responsibility for application architecture, database design, and production operations. My experience includes managing and optimizing a multi-database MySQL environment (3GB+ primary database), designing schema evolution strategies, improving query performance, and maintaining uptime across multiple Amazon Lightsail instances.

In recent years, I’ve introduced structured code reviews, adopted AI-assisted development tools to improve engineering efficiency, contributed to hiring processes, Github actions, unit tests with PHPUnit, and mentored junior developers — while continuing to focus primarily on hands-on engineering.`,
    image: "/profile-big.jpg",
  },
};