export const blogPosts = [
  {
    slug: "how-i-built-my-portfolio",
    title: "Reimagining My Portfolio: From Static HTML to a Dynamic Next.js Experience",
    date: "October 2026",
    readTime: "4 min read",
    category: "Web Development",
    excerpt: "Why I threw away my single-page HTML site and rebuilt it from scratch using Next.js, Framer Motion, and a custom Command Palette.",
    content: `
# The "Just Use a Template" Dilemma
When I first built my portfolio, I did what most CS graduates do: I wrote a massive \`index.html\` file, linked some CSS, and called it a day. It worked, but it felt static. It didn't reflect the kind of engineer I wanted to be.

I decided to rebuild it from the ground up using **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. 

## The Architecture: Thinking in Components
The biggest shift was moving from a single file to a component-based architecture. Now, my homepage is just a composition of smaller, isolated pieces: \`Hero\`, \`About\`, \`Skills\`, and \`Projects\`. 

To ensure the site loads instantly for recruiters, I used Next.js **Dynamic Imports** (\`next/dynamic\`). This means the browser only loads the Hero section first, and fetches the rest of the page lazily as the user scrolls.

## The "Wow" Factor: Building a Command Palette
I wanted recruiters to navigate my site the way developers navigate VS Code. I integrated the \`cmdk\` library to build a \`Ctrl+K\` command menu. 

Users can now jump to specific sections, copy my email address, or open my GitHub profile without touching their mouse. It's a small feature, but it immediately signals: *"This person builds tools, not just websites."*

## Performance is a Feature
I quickly realized that cool animations mean nothing if the site lags. I implemented **Lenis** for smooth, inertial scrolling and strictly optimized all images using the Next.js \`<Image />\` component to serve modern WebP formats.

## What's Next?
This portfolio is a living project. The next step is building a dedicated "Case Studies" section to explain the architecture behind my projects, rather than just showing screenshots. 

If you're a junior developer reading this: don't just build a portfolio. **Engineer** it. Let it be a reflection of your problem-solving skills.
    `,
  },
  {
    slug: "django-meets-data-analytics",
    title: "Why I Pair Django with Power BI: The Full-Stack Data Journey",
    date: "September 2026",
    readTime: "3 min read",
    category: "Data Analytics",
    excerpt: "Building the software is only half the battle. Understanding the data it generates is where the real value lies.",
    content: `
# The Catalyst: The Coal Mining Project
When I built the **Coal Mining Management System** using Django and PostgreSQL, I thought my job was done once the RBAC and CRUD operations worked perfectly. 

I quickly realized that writing the backend code was just the foundation. The real value was locked inside the database. Management didn't just want a system to *store* data; they wanted a system to *explain* it.

## The Power of SQL
I started writing complex PostgreSQL queries using CTEs and Window Functions to analyze production trends. I realized that a great developer doesn't just build the database; they understand how to extract meaningful insights from it.

## Visualizing the Insights
Raw data in a table is overwhelming. I began integrating **Chart.js** into the Django app, but quickly realized the need for a more robust tool. 

This led me to pursue the **Microsoft Power BI Data Analyst** certification. I wanted to take raw SQL queries and turn them into interactive dashboards that stakeholders could actually understand.

## Why This Matters for Your Career
If you are a web developer, take the time to learn how your data is used after it's saved. If you are a data analyst, understand the database schema and the application that generates the data. 

Combining development (Django) with data analytics (SQL, Power BI) has made me a more versatile problem solver. I don't just build the app; I help the business make decisions with the data inside it.
    `,
  }
];