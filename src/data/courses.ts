export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  whatYouWillLearn: string[];
  price: string;
  level: string;
  duration: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Mastering Next.js & React 19",
    slug: "mastering-nextjs-react",
    shortDescription: "Learn the latest Next.js App Router, Server Actions, and React 19 patterns.",
    fullDescription: "Dive deep into the modern web ecosystem with our most comprehensive guide to Next.js and React. This course is designed keeping in mind the industry demands for 2026. You will build production-ready applications.",
    whatYouWillLearn: [
      "Next.js App Router & Server Components",
      "React 19 Hooks and Patterns",
      "Performance and SEO Optimization",
      "Building scalable web architecture"
    ],
    price: "₹1,999",
    level: "Intermediate",
    duration: "6 Weeks",
    image: "/course_nextjs.png"
  },
  {
    id: "2",
    title: "Complete Python Bootcamp",
    slug: "complete-python-bootcamp",
    shortDescription: "Go from beginner to advanced in Python programming.",
    fullDescription: "Python remains one of the most highly sought-after skills in the tech industry. Whether you are aiming for Data Science, Backend Web Development, or AI, this foundational course covers it all.",
    whatYouWillLearn: [
      "Python Basics to Advanced Object-Oriented Programming",
      "Working with APIs and web scraping",
      "Data structures and algorithms",
      "Introduction to Pandas and NumPy"
    ],
    price: "₹1,499",
    level: "Beginner",
    duration: "8 Weeks",
    image: "/course_python.png"
  },
  {
    id: "3",
    title: "Digital Marketing Mastery",
    slug: "digital-marketing-mastery",
    shortDescription: "Execute campaigns, master SEO, and grow businesses online.",
    fullDescription: "A fully practical course on Digital Marketing. Ideal for students in India looking to build an online presence or start their own agency. Learn SEO, SEM, and SMM systematically.",
    whatYouWillLearn: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing Strategies",
      "Google Ads and Analytics",
      "Content Marketing and Copywriting"
    ],
    price: "₹1,299",
    level: "Beginner",
    duration: "4 Weeks",
    image: "/course_marketing.png"
  },
  {
    id: "4",
    title: "Data Structures & Algorithms in Java",
    slug: "dsa-in-java",
    shortDescription: "Crack coding interviews at top tech companies.",
    fullDescription: "This rigorous course prepares you for technical interviews. We cover everything from Arrays and Linked Lists to Dynamic Programming and Graph theory, strictly using Java.",
    whatYouWillLearn: [
      "Big O Notation and Time Complexity",
      "Advanced Trees and Graphs",
      "Dynamic Programming patterns",
      "Systematic problem-solving strategies"
    ],
    price: "₹2,499",
    level: "Advanced",
    duration: "10 Weeks",
    image: "/course_java.png"
  }
];
