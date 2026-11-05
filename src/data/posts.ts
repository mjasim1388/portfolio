export const blogPosts = [
  {
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio with Next.js & VengeanceUI",
    date: "October 2026",
    readTime: "4 min read",
    excerpt: "A deep dive into how I migrated from a static HTML site to a modern, highly interactive Next.js portfolio featuring a command palette and WebGL elements.",
    content: `
# The Challenge
I started with a single \`index.html\` file. It worked, but it felt static. I wanted a portfolio that reflected my actual engineering skills. I decided to rebuild it using **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## The Architecture
I utilized the new Next.js App Router. Instead of making one massive page file, I broke the UI down into isolated components (\`Hero\`, \`About\`, \`Skills\`, \`Projects\`). 

To keep the initial load time incredibly fast, I used \`next/dynamic\` to **lazy-load** everything below the fold. This means the browser only downloads the Hero component first, and fetches the rest as the user scrolls.

## The Cool Features
### 1. The Command Palette
I wanted users to navigate my site like they navigate VS Code. I used the \`cmdk\` library to build a \`Ctrl+K\` menu that lets recruiters jump to sections, copy my email, or open my GitHub instantly.

### 2. Custom WebGL Particle Name
For my hero section, I experimented with Three.js and interactive particles. While I ultimately decided to go with a cleaner, high-performance layout for recruiters, the process taught me a lot about WebGL and React state management.

### 3. Real API Integration
I replaced the generic \`mailto:\` links with a real contact form using **Web3Forms**. This ensures that if a recruiter wants to contact me, they don't have to open their email client—they can just type and hit send.

## Performance First
I used **Lenis** for buttery smooth scrolling and optimized all my images using the Next.js \`<Image />\` component, ensuring that the large project screenshots are converted to WebP and lazy-loaded.
    `,
  },
  {
    slug: "why-i-love-data-and-django",
    title: "Why I Combine Django with Data Analytics",
    date: "September 2026",
    readTime: "3 min read",
    excerpt: "Building software is only half the battle. Understanding the data it generates is where the real value lies.",
    content: `
# Software is a Means to an End
When I built the **Coal Mining Management System**, I realized that writing the Django code was just the beginning. The real value was in the data we were collecting. 

## The Power of SQL
Using PostgreSQL, I was able to write complex queries using Window Functions and CTEs to analyze production trends. I realized that a great developer doesn't just build the database; they understand how to read it.

## Visualizing the Data
I integrated Power BI and Chart.js into my workflows. Taking raw numbers and turning them into dashboards that management can actually understand is a superpower. 

This is why I am currently pursuing the **Microsoft Power BI Data Analyst** certification. I don't want to just build the app; I want to help the business make decisions with the data inside it.
    `,
  }
];