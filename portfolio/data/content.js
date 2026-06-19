// Centralized content for the portfolio.
// Edit this file to update any text, links, or data shown on the site.

export const personal = {
  name: "Sakthivel S",
  title: "Full Stack Engineer",
  tagline: "Building scalable systems and clean, intuitive interfaces.",
  role: "Software Engineer @ LTM",
  location: "Chennai, India",
  email: "sakthispgs@gmail.com",
  github: "https://github.com/sakthispgs",
  resumeLink: "mailto:sakthispgs@gmail.com?subject=Resume%20Request",
  availability: "Open to new opportunities",
};

export const about = {
  eyebrowNumber: "01",
  headingPrimary: "Engineering thoughtful,",
  headingAccent: "scalable products",
  paragraphs: [
    "I'm a Full Stack Engineer with a strong foundation in building scalable backend systems and modern, user-friendly interfaces. I specialize in Java, Spring Boot, and Angular, with hands-on experience designing end-to-end applications that are both performant and visually refined.",
    "My focus isn't just on building features \u2014 it's on clean architecture, optimized performance, and intuitive user experiences. I've worked on real-world applications such as media asset management systems, budget planning tools, and full-stack enterprise solutions, where handling large datasets and maintaining clean code are critical.",
    "With growing expertise in cloud technologies like AWS, I aim to build systems that are scalable, efficient, and production-ready. I enjoy turning complex problems into simple, elegant solutions \u2014 products that feel both powerful and easy to use.",
  ],
  vitals: [
    { label: "Currently", value: "Software Engineer @ LTM" },
    { label: "Based in", value: "Chennai, India" },
    { label: "Focus", value: "Full-Stack & Cloud Systems" },
  ],
  timeline: [
    {
      year: "2026",
      title: "AWS Certified Cloud Practitioner",
      description: "Earned AWS cloud certification, validating foundational cloud architecture knowledge.",
    },
    {
      year: "2025",
      title: "Software Engineer @ LTM",
      description: "Joined LTM, contributing to MAM Agent, an enterprise media asset management platform.",
    },
    {
      year: "2025",
      title: "Orchard \u2014 Java Full Stack Training",
      description: "Completed an intensive 3-month program at LTM Shoshin School covering Java, Spring Boot, and Angular.",
    },
  ],
};

export const disciplines = [
  "FULL STACK DEVELOPMENT",
  "JAVA & SPRING BOOT",
  "ANGULAR",
  "REST APIs & JWT",
  "CLOUD (AWS)",
  "SQL & NOSQL DATABASES",
  "CLEAN ARCHITECTURE",
  "GRAPH-BASED SYSTEMS",
];

export const proof = [
  { value: "Full Stack", label: "Java \u00b7 Angular" },
  { value: "AWS", label: "Cloud Practitioner" },
  { value: "5+ Shipped", label: "Robust Projects" },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 65 },
      { name: "Kotlin", level: 45 },
      { name: "SQL", level: 82 },
      { name: "C", level: 60 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Spring Boot", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "Angular", level: 85 },
      { name: "HTML / CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "DynamoDB", level: 85 },
    ],
  },
  {
    name: "Cloud (AWS)",
    skills: [
      { name: "EC2", level: 75 },
      { name: "Lambda", level: 75 },
      { name: "CloudFront", level: 75 },
      { name: "VPC", level: 75 },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Streamlit", level: 65 },
    ],
  },
];

export const tools = [
  "GitHub",
  "Postman",
  "VS Code",
  "Android Studio",
  "MATLAB",
  "VMware (Ubuntu)",
];

export const projects = [
  {
    id: "fingraph-ai",
    name: "FinGraph AI",
    subtitle: "AML Fraud Detection Platform",
    context: "Internal Hackathon, LTM \u00b7 Team: Byte Bandits",
    problem:
      "Rule-based AML systems flag transactions using static thresholds, generating high false positives and missing fraud patterns that emerge from relationships between accounts rather than single transactions.",
    solution: [
      "Graph traversal (Neo4j) to detect circular money movement and rapid transaction loops between linked accounts",
      "Behavioral risk scoring layered on graph structure to flag structuring/smurfing and mule-like account behavior",
      "Contextual analysis combining transaction relationships with behavioral signals instead of static rule thresholds",
    ],
    impact: [
      "Improved detection accuracy over rule-based baselines by surfacing relationship-driven fraud patterns",
      "Reduced false-positive noise by adding behavioral context",
      "Delivered a working real-time detection prototype within a hackathon timeframe",
    ],
    stack: ["Java", "Neo4j", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Naveensaravanan2002/FinGraph-AI",
    featured: true,
  },
  {
    id: "mam-agent",
    name: "MAM Agent",
    subtitle: "Media Asset Management Platform",
    context: "Internal Enterprise Project, LTM",
    problem:
      "Managing large-scale media data and metadata (audio, subtitles, asset attributes) at enterprise volume created performance bottlenecks and slow, unwieldy visualization.",
    solution: [
      "Backend services and APIs (Flask, FastAPI) for processing and serving media data",
      "Streamlit-based UI for dynamic, structured visualization of asset metadata",
      "Optimized data handling logic to support large datasets without degrading UI responsiveness",
    ],
    impact: [
      "Reduced UI performance issues when handling large media datasets",
      "Enabled faster, smoother visualization of asset metadata",
      "Improved system usability and scalability for real-world data volumes",
    ],
    stack: ["Python", "Flask", "FastAPI", "Streamlit"],
    github: null,
    featured: true,
  },
  {
    id: "wizone",
    name: "WiZone",
    subtitle: "WiFi Scheme Management Platform",
    context: "Final Incremental Group Project, LTM Training",
    problem:
      "Users needed a structured way to browse and book WiFi schemes across multiple cities, while administrators needed secure, role-based control over schemes, users, and services.",
    solution: [
      "Scheme listing and booking flow built end-to-end (Angular frontend, Spring Boot backend)",
      "JWT-based authentication with email verification and Auth Guards for protected routes",
      "Role-based access across three tiers: user, admin, and super admin",
      "Admin panel for managing schemes and users",
    ],
    impact: [
      "Delivered structured, city-wide WiFi scheme management with secure booking flow",
      "Strengthened security posture through JWT authentication and role-based access control",
      "Built a scalable system supporting user-facing and admin-level operations",
    ],
    stack: ["Angular", "Java", "Spring Boot", "JWT"],
    github:
      "https://github.com/iamneo-production-2/b1cc36a0-8eca-4843-b04b-4d6e8f94d809-322a13a9-00e8-478e-b575-dbd9d6caccfe",
    featured: false,
  },
  {
    id: "wishly",
    name: "WISHLY",
    subtitle: "Shopping List App",
    context: "Android App Development Training",
    problem:
      "Everyday shopping list management lacks a clean, organized way to add, edit, and track items.",
    solution: [
      "UI built entirely in Jetpack Compose for a clean, responsive interface",
      "Core list management features: adding, editing, and tracking shopping items",
      "Simple, intuitive user flow focused on usability and smooth interaction",
    ],
    impact: [
      "Delivered a polished, functional app for everyday shopping organization",
      "Demonstrated practical, hands-on application of Kotlin and Jetpack Compose",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android Studio"],
    github: "https://github.com/sakthispgs/wishly",
    featured: false,
  },
  {
    id: "streetlight-system",
    name: "Smart Street Light System",
    subtitle: "Fault Detection & Energy Optimization",
    context: "College Final Year Project \u00b7 Hardware + Software",
    problem:
      "Traditional street lighting runs at fixed brightness regardless of need, wasting energy, and fault detection relies on manual inspection, making city-wide maintenance slow.",
    solution: [
      "ESP32 + PIR motion sensors to detect real-time crowd/foot-traffic density per area",
      "Automatic step-up/step-down transformer control to adjust brightness based on detected density",
      "Flask backend processing sensor data, served to a web dashboard (HTML/CSS)",
      "Dashboard showing energy savings, light locations, and fault status",
    ],
    impact: [
      "Demonstrated measurable energy savings vs. always-on street lighting",
      "Enabled faster fault identification through centralized monitoring",
      "Designed as an affordable, scalable smart-city infrastructure solution",
    ],
    stack: ["ESP32", "PIR Sensors", "Python (Flask)", "HTML/CSS"],
    github: null,
    featured: false,
  },
];

export const experience = [
  {
    company: "LTM",
    role: "Software Engineer",
    period: "Dec 2025 \u2014 Present",
    points: [
      "Contributing to MAM Agent, an internal media asset management platform handling large-scale media data and metadata.",
      "Built backend services and APIs for media data processing, and a Streamlit-based UI for dynamic metadata visualization.",
      "Completed an intensive 3-month full-stack training program (Orchard \u2014 Java Full Stack) covering Java, Spring Boot, and Angular.",
    ],
  },
];

export const achievements = {
  featured: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Foundational",
      issued: "Issued June 2026 · Valid through June 2029",
      verifyUrl: "/certificates/AWS Certified Cloud Practitioner certificate.pdf",
      badge: "/images/aws-badge.png",
    },
    {
      title: "Orchard — Java Full Stack Training Program",
      subtitle: "LTM Shoshin School",
      issued: "Completed FY 2025-26",
      verifyUrl: "/certificates/Orchard JAVA Full Stack.png",
      badge: "/images/orchard-badge.png",
    },
  ],
  academic: [
    "Secured 1st place in both 10th and 12th grade",
    'Awarded "Best Student" for overall academic performance and excellence',
    "Recognized for oral & technical presentation at the 7th Ankara International Congress on Scientific Research, Dec 2022, T\u00fcrkiye",
  ],
  training: [
    "Orchard \u2014 Java Full Stack Training Program, LTM Shoshin School (FY 2025-26)",
    "BlueVerse\u2122 Certified Developer: Level 1, LTM",
  ],
  technical: [
    "CCNAv7: Introduction to Networks",
    "Design Thinking (Elite) \u2014 NPTEL",
    "Digital Design with Verilog \u2014 NPTEL",
    "Problem Solving through Programming in C \u2014 NPTEL",
    "The Joy of Computing using Python (Elite) \u2014 NPTEL",
    "Android App Development with Kotlin: Beginner to Advanced \u2014 Udemy (56 hrs)",
    "Claude 101 \u2014 Anthropic",
  ],
};

export const blogs = [
  {
    id: "ikigai-book-reflections",
    title: "Finding Purpose in Simplicity: My Journey with Ikigai",
    date: "June 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "How I Discovered This Book",
        content: `I stumbled upon "Ikigai: The Japanese Secret to a Long and Happy Life" during a phase when I was feeling overwhelmed with work and unsure about where I was heading. A friend mentioned it casually, saying it was a short read that had helped him find some clarity. I wasn't expecting much — just another self-help book, I thought. But from the first few pages, something felt different. It wasn't preachy or filled with complicated frameworks. It felt like a quiet conversation about life.`,
      },
      {
        heading: "What Ikigai Means in Simple Terms",
        content: `Ikigai is a Japanese concept that roughly translates to "a reason for being." It's the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. But beyond this framework, the book focuses on something deeper — finding joy in small, everyday moments rather than chasing grand achievements. The authors studied the people of Okinawa, Japan, one of the regions with the highest number of centenarians in the world. Their secret wasn't a magic diet or rigorous exercise routine. It was purpose, community, and staying engaged with life.`,
      },
      {
        heading: "How the Book Helped Me Improve",
        content: `Reading Ikigai shifted my perspective in subtle but meaningful ways.

**Mindset:** I stopped obsessing over "making it big" and started appreciating where I am right now. The book reminded me that fulfillment isn't about reaching a destination — it's about finding meaning in the journey.

**Clarity:** I began asking myself what genuinely excites me versus what I thought I should be excited about. This helped me focus on work that aligns with my strengths and interests rather than chasing trends.

**Purpose:** Instead of waiting for some grand purpose to reveal itself, I started recognizing purpose in my daily work — writing clean code, solving a tricky bug, helping a teammate understand something new.

**Daily Habits:** The concept of "flow" — being so absorbed in an activity that you lose track of time — resonated deeply. I started structuring my days to include more focused, uninterrupted work sessions.`,
      },
      {
        heading: "Practical Learnings I Applied in My Life",
        content: `Here are a few things I consciously adopted after reading the book:

**Start small, stay consistent:** The people of Okinawa didn't run marathons. They walked, gardened, and stayed active in small ways every day. I applied this to learning — instead of cramming, I now spend 30 minutes daily on something I want to improve at.

**Stay curious:** Ikigai emphasizes never retiring mentally. I've made it a habit to explore something new every week — whether it's a technology, a concept, or even just a book outside my usual reading list.

**Build connections:** The book highlights how strong social ties contribute to longevity and happiness. I've become more intentional about reaching out to friends and colleagues, not just when I need something, but to genuinely connect.

**Embrace imperfection:** The Japanese have a concept called "wabi-sabi" — finding beauty in imperfection. This helped me let go of perfectionism that often slowed me down. Done is better than perfect, especially in software.`,
      },
      {
        heading: "Why the Book Feels Wholesome and Meaningful",
        content: `What makes Ikigai special is that it doesn't try to sell you a formula for success. It's not about optimizing every minute of your day or hustling harder. It's about slowing down, being present, and finding reasons to get out of bed each morning — reasons that are personal and meaningful to you.

The stories from Okinawan elders were genuinely inspiring. These were people in their 90s and 100s who still worked in their gardens, met friends for tea, and had a twinkle in their eyes when they talked about their daily routines. It made me realize that a good life isn't about extraordinary achievements — it's about showing up for the ordinary moments with intention.

The book left me feeling calm rather than motivated, grounded rather than fired up. And honestly, that's exactly what I needed.`,
      },
    ],
    whatsNext: `I've only scratched the surface of what Ikigai taught me. In my next post, I'll dive deeper into practical ways to actually discover your own ikigai — not through abstract reflection, but through real exercises and questions I used to get clearer on my direction. I'll also share how I'm trying to apply the concept of "flow" more deliberately in my engineering work and daily routine. Stay tuned.`,
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
