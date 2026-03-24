export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  preview: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Top 5 Skills Students Should Learn in 2026",
    slug: "top-5-skills-students-should-learn-in-2026",
    preview: "Discover the most demanded skills for students in India in 2026, from AI to advanced web development and beyond.",
    date: "March 20, 2026",
    image: "/blog_skills.png",
    category: "Career",
    readTime: "6 min read",
    content: `
      <h2>The Future of Work in India</h2>
      <p>As we step into 2026, the global and local job markets in India are rapidly evolving. The advent of AI and advanced software tools means students must adapt quickly to stay relevant. Companies are no longer just looking for degree holders — they are looking for skilled, adaptable professionals who can deliver real value from day one.</p>

      <h2>1. Artificial Intelligence and Machine Learning</h2>
      <p>Understanding how AI works and how to integrate it into daily workflows is no longer optional. It's the new baseline for any knowledge worker. Platforms like Google Gemini, OpenAI, and Hugging Face have made AI tools more accessible than ever.</p>
      <p>Even without a deep math background, students can learn to build AI-powered applications using Python and readily available APIs. Start with prompt engineering, move to fine-tuning, then explore building agents.</p>

      <h2>2. Full-Stack Web Development</h2>
      <p>With frameworks like <strong>Next.js</strong> dominating the frontend and scalable cloud setups on the backend, Full-Stack developers remain in extremely high demand. India's booming startup ecosystem ensures that web developers always have work — and the salary range is among the highest for entry-level professionals.</p>

      <h2>3. Data Analysis</h2>
      <p>Data drives decisions. Knowing how to manipulate, interpret, and present data using tools like Python, Pandas, and SQL is crucial. Learn to tell compelling stories with data visualizations, and you stand apart from the crowd.</p>

      <h2>4. Digital Marketing Strategy</h2>
      <p>Every business needs visibility. SEO, social media marketing, and growth hacking remain incredibly potent skills. Small businesses in India especially need affordable digital marketers who understand platforms like Google Ads, Instagram, and YouTube.</p>

      <h2>5. Cybersecurity Fundamentals</h2>
      <p>With more data online than ever before, protecting that data is paramount. Even a basic understanding of network security, ethical hacking, and OWASP fundamentals will make you a massive asset to any tech company.</p>

      <h3>Where to Start?</h3>
      <p>The best news? All five of these can be learned online, affordably. Check out our comprehensive <a href="/courses">courses library</a> to begin your learning journey today with structured, project-based curriculums led by industry practitioners.</p>
    `,
  },
  {
    id: "2",
    title: "How to Start Learning Coding as a Beginner",
    slug: "how-to-start-learning-coding-as-a-beginner",
    preview: "A comprehensive beginner's guide to writing your first line of code and building a career in software development.",
    date: "March 22, 2026",
    image: "/blog_coding.png",
    category: "Coding",
    readTime: "8 min read",
    content: `
      <h2>Why Learn to Code?</h2>
      <p>Coding is the closest thing we have to a superpower. It allows you to build applications, automate tasks, start businesses from your laptop, and command top salaries anywhere in India or the world. In 2026, coding literacy is as foundational as reading and writing.</p>

      <h2>Step 1: Choose the Right Language</h2>
      <p>For absolute beginners, we highly recommend starting with either <strong>Python</strong> or <strong>JavaScript</strong>. Python is praised for its readable, clean syntax that closely mirrors English. JavaScript is essential for building web interfaces and is the most widely used language in the world.</p>
      <p>Avoid the trap of "language paralysis". The best language is the one you actually start with.</p>

      <h2>Step 2: Understand the Core Fundamentals</h2>
      <p>Before building complex projects, take time to deeply understand the following concepts:</p>
      <ul>
        <li>Variables and Data Types</li>
        <li>Conditional Statements (if/else)</li>
        <li>Loops (for, while)</li>
        <li>Functions and Scope</li>
        <li>Arrays and Objects</li>
      </ul>
      <p>These are the universal building blocks of every programming language. Master them and switching languages later becomes trivial.</p>

      <h2>Step 3: Escape Tutorial Hell — Build Real Projects</h2>
      <p>The single biggest mistake beginners make is watching tutorial after tutorial without writing their own code. After completing one foundational course, immediately start building:</p>
      <ul>
        <li>A personal portfolio website</li>
        <li>A to-do list application</li>
        <li>A weather app using a public API</li>
        <li>A simple e-commerce UI mockup</li>
      </ul>
      <p>Projects push you into problem-solving mode, which is how real developers spend their time.</p>

      <h2>Step 4: Code Every Single Day</h2>
      <p>Consistency beats intensity. Code for at least 30 focused minutes every day. The compounding effect of daily practice over 3–6 months is extraordinary. Use GitHub to track your commits — a green contribution graph is a powerful motivational tool and also impresses employers.</p>

      <h2>Step 5: Join a Community</h2>
      <p>Join Discord servers, Reddit communities (r/learnprogramming), and local developer meetups. Learning alongside others, asking questions openly, and reviewing others' code accelerates your growth significantly.</p>

      <h3>Ready to Take the First Step?</h3>
      <p>We've put together affordable, structured curriculums for beginners designed to take you from your first "Hello World" to building full-stack applications. <a href="/courses">Explore our coding courses</a> and start coding today.</p>
    `,
  }
];
