export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Web Systems' | 'Assistive Tech';
  shortDescription: string;
  fullDescription: string;
  role: string;
  team?: string;
  event?: string;
  image: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  highlights: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  details?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  tag: string;
}

export interface Participation {
  title: string;
  type: string;
  organizer: string;
  team?: string;
  year: string;
  description: string;
  role: string;
}

export interface Hobby {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  quote: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Sharadhi Acharya",
    shortName: "Sharadhi",
    headline: "AI & Data Science Engineer · Full Stack Developer · Tech Innovator",
    subheading: "BE in Artificial Intelligence & Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (CGPA: 8.2). Passionate about building intelligent systems, assistive technology, and meaningful web applications.",
    email: "sharadhiacharya654@gmail.com",
    phone: "+91 9108250673",
    displayPhone: "9108250673",
    location: "Brahmavar, Udupi, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/sharadhi-acharya-b8a167367",
    linkedinDisplay: "linkedin.com/in/sharadhi-acharya",
    github: "https://github.com/Sharadhi-654",
    githubDisplay: "github.com/Sharadhi-654",
    availability: "Open to Internships & Projects (2025–2026)",
  },

  education: [
    {
      degree: "Bachelor of Engineering (BE) in Artificial Intelligence and Data Science",
      institution: "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM)",
      location: "Bantakal, Udupi",
      period: "2024 – 2028",
      scoreLabel: "CGPA",
      score: "8.2 / 10",
      details: "Focused on Artificial Intelligence, Machine Learning, Data Structures, Database Systems, and Autonomous Agents.",
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Government Pre-University College (GPUC)",
      location: "Brahmavar, Udupi",
      period: "2022 – 2024",
      scoreLabel: "Percentage",
      score: "90%",
      details: "Core subjects in Physics, Chemistry, Mathematics, and Computer Science.",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "GPUC Brahmavar",
      location: "Brahmavar, Udupi",
      period: "2020 – 2022",
      scoreLabel: "Percentage",
      score: "93%",
      details: "Distinction with excellence in Mathematics, Science, and Languages.",
    },
  ] as Education[],

  skills: {
    programming: [
      { name: "Python", level: "Proficient", focus: "Data Science, Machine Learning, Flask, Scripting" },
      { name: "C", level: "Intermediate", focus: "Algorithms, Data Structures, System Concepts" },
    ],
    web: [
      { name: "HTML5", level: "Advanced", focus: "Semantic layout, accessibility, responsive UI" },
      { name: "CSS3 / Modern Styling", level: "Advanced", focus: "Tailwind CSS, animations, responsive design" },
      { name: "JavaScript (ES6+)", level: "Proficient", focus: "Async programming, DOM manipulation, APIs" },
      { name: "React", level: "Intermediate", focus: "Component architecture, state management, hooks" },
    ],
    databases: [
      { name: "MySQL", level: "Proficient", focus: "Relational schema design, queries, transactions" },
      { name: "MongoDB", level: "Intermediate", focus: "Document storage, collections, NoSQL queries" },
    ],
    tools: [
      { name: "GitHub / Git", description: "Version control, collaborative workflows, CI/CD" },
      { name: "VS Code", description: "Primary IDE, debugging, extension ecosystem" },
      { name: "Antigravity", description: "Workflow orchestration, rapid prototyping" },
      { name: "Flask / REST APIs", description: "Backend routing, authentication, API endpoints" },
    ],
    soft: [
      { name: "Communication", description: "Clear technical and interpersonal articulation in teams" },
      { name: "Teamwork", description: "Collaborative spirit in hackathons (Team Yugma, Team VocalTech)" },
      { name: "Problem Solving", description: "Analytical mindset breaking down complex real-world issues" },
      { name: "Time Management", description: "Thriving under tight 24-hour hackathon deadlines" },
      { name: "Quick Learning", description: "Rapid adoption of emerging technologies like Agentic AI" },
    ],
    languages: [
      { name: "English", proficiency: "Professional Working Proficiency" },
      { name: "Kannada", proficiency: "Native / Mother Tongue" },
      { name: "Tulu", proficiency: "Native / Regional Fluency" },
    ],
  },

  projects: [
    {
      id: "banking-system",
      title: "Banking Management System",
      category: "Web Systems",
      shortDescription: "A comprehensive web-based banking platform for customer account management, secure transaction processing, and financial records.",
      fullDescription: "Developed an end-to-end banking management application using Python Flask for backend logic and MySQL for relational data persistence. The system enables users to create accounts, deposit/withdraw funds, transfer money between accounts with transactional integrity, inspect mini-statements, and track balance ledgers in real-time.",
      role: "Lead Full-Stack Developer",
      image: "/src/assets/images/project_banking_management_1791127871579.jpg",
      techStack: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
      keyFeatures: [
        "Secure account registration and authenticated sessions",
        "ACID-compliant fund transfers with rollback on failure",
        "Transaction history table with filtering and timestamp logging",
        "Customer profile updates and balance summary dashboard",
        "Input validation preventing negative balance overdrafts",
      ],
      githubUrl: "https://github.com/Sharadhi-654/banking-management-system",
      highlights: "Ensured transactional integrity and relational integrity using MySQL stored routines and Python Flask backend.",
    },
    {
      id: "eduquest",
      title: "EduQuest — Gamified Learning Platform",
      category: "Web Systems",
      shortDescription: "An interactive, gamified learning platform developed in a 24-hour IEEE hackathon to make education enjoyable and effective.",
      fullDescription: "EduQuest was conceived and built during the ANVESHAN 2025 24-Hour Hackathon organized by IEEE Bangalore. Serving as core developer in Team Yugma, I engineered interactive quiz mechanics, level-up milestones, and dynamic knowledge challenges that keep students motivated through gamified feedback loops.",
      role: "Full-Stack Developer",
      team: "Team Yugma",
      event: "ANVESHAN 2025 (IEEE Bangalore 24h Hackathon)",
      image: "/src/assets/images/project_eduquest_gamified_1791127886338.jpg",
      techStack: ["JavaScript", "HTML5", "CSS3", "Node.js / Express", "Gamification UI"],
      keyFeatures: [
        "Adaptive quiz challenges with instant scoring and explanations",
        "Gamified progress quests, experience points, and milestone badges",
        "Interactive topic modules with bite-sized learning cards",
        "Responsive interface optimized for both mobile and web viewports",
        "Student leaderboard fostering healthy peer engagement",
      ],
      githubUrl: "https://github.com/Sharadhi-654/EduQuest",
      highlights: "Built and presented under intense 24-hour sprint at IEEE Bangalore ANVESHAN 2025.",
    },
    {
      id: "skill-mapper",
      title: "Skill Mapper — Career Readiness Platform",
      category: "AI & ML",
      shortDescription: "An analytics-driven skill mapping platform that diagnoses student competency gaps and generates custom career roadmaps.",
      fullDescription: "Presented at the SMVITM Tech Fest, Skill Mapper helps undergraduate students identify their technical strengths, detect critical skill gaps based on current industry job descriptions, and provides curated recommendations for learning paths, certifications, and project benchmarks.",
      role: "Platform Developer & Architect",
      event: "SMVITM Tech Fest",
      image: "/src/assets/images/project_skill_mapper_1791127897443.jpg",
      techStack: ["Python", "JavaScript", "HTML5/CSS3", "Data Analytics", "MongoDB"],
      keyFeatures: [
        "Interactive self-assessment and skill radar analysis",
        "Skill gap detection algorithm comparing user profile against market demands",
        "Tailored milestone recommendations and suggested certifications",
        "Curated project suggestions to bridge detected deficits",
        "Exportable student development summary report",
      ],
      githubUrl: "https://github.com/Sharadhi-654/Skill-Mapper",
      highlights: "Showcased to faculty and industry judges at SMVITM Tech Fest, receiving high commendation for practical student utility.",
    },
    {
      id: "ai-voice-mute-mate",
      title: "AI Voice for Mute Mate",
      category: "Assistive Tech",
      shortDescription: "An assistive technology solution designed to give real-time vocal expression to mute individuals using intelligent synthesis.",
      fullDescription: "Presented at IDEATHON-2025 General Innovation at CIT Gubbi, Tumkur. Serving as a developer in Team VocalTech, we designed an empathetic assistive tool that translates quick taps, gestures, and predictive text into natural human speech synthesis, enabling seamless day-to-day communication for speech-impaired individuals.",
      role: "Developer",
      team: "Team VocalTech",
      event: "IDEATHON-2025 (CIT Gubbi, Tumkur)",
      image: "/src/assets/images/project_ai_voice_assistive_1791127909684.jpg",
      techStack: ["Python", "Speech Synthesis API", "JavaScript", "Assistive UX"],
      keyFeatures: [
        "Rapid phrase card triggers for urgent emergency and daily needs",
        "Predictive sentence completion for rapid conversational response",
        "Multi-accent and clear vocal audio playback",
        "High-contrast, accessible touch interface for effortless usage",
      ],
      githubUrl: "https://github.com/Sharadhi-654/AI-Voice-Mute-Mate",
      highlights: "Selected and recognized at IDEATHON 2025 for impactful human-centric assistive innovation.",
    },
  ] as Project[],

  certificates: [
    {
      title: "Machine Learning Onramp",
      issuer: "MathWorks",
      year: "2025",
      description: "Comprehensive training in core ML algorithms, data preparation, feature engineering, and model evaluation techniques.",
      tag: "Machine Learning",
    },
    {
      title: "Artificial Intelligence Beginners Guide",
      issuer: "Certified Program",
      year: "2026",
      description: "In-depth foundation covering neural networks, search heuristics, supervised learning, and AI ethics.",
      tag: "Artificial Intelligence",
    },
    {
      title: "Hands-on Workshop on Understanding Agentic AI",
      issuer: "ExvisIT 2026",
      year: "2026",
      description: "Hands-on implementation of autonomous AI agents, tool invocation, reasoning loops, and multi-agent orchestration.",
      tag: "Agentic AI",
    },
  ] as Certificate[],

  participations: [
    {
      title: "ANVESHAN 2025: 24-Hour Hackathon",
      type: "Hackathon",
      organizer: "IEEE Bangalore",
      team: "Team Yugma",
      year: "2025",
      role: "Core Developer",
      description: "Collaborated in an intensive 24-hour sprint to conceptualize, design, and develop EduQuest, a gamified mobile & web learning platform.",
    },
    {
      title: "IDEATHON-2025: General Innovation",
      type: "Innovation Challenge",
      organizer: "CIT Gubbi, Tumkur",
      team: "Team VocalTech",
      year: "2025",
      role: "Developer",
      description: "Presented 'AI Voice for Mute Mate', an assistive communication platform bridging the gap for speech-impaired individuals.",
    },
    {
      title: "SMVITM Tech Fest: Skill Mapper Presentation",
      type: "Technical Presentation",
      organizer: "SMVITM Bantakal, Udupi",
      year: "2025",
      role: "Creator & Presenter",
      description: "Presented Skill Mapper to academic leaders and peers, demonstrating automated skill gap analysis and career recommendations.",
    },
  ] as Participation[],

  hobbies: [
    {
      id: "singing",
      title: "Singing & Vocal Music",
      tagline: "Finding harmony, pitch, and emotional expression through melody",
      description: "Singing has always been my creative sanctuary. Whether it is practicing melodic classical ragas, soul-stirring Indian melodies, or singing favorite acoustic numbers, music cultivates deep mindfulness, patience, and rhythmic precision that enriches my engineering mindset.",
      iconName: "Mic2",
      quote: "\"Where words fail, music speaks. Singing teaches me discipline, breath control, and emotional presence.\"",
      items: ["Classical Melodies", "Devotional & Light Music", "Acoustic Ballads", "Pitch & Vocal Training"],
    },
    {
      id: "reading",
      title: "Reading",
      tagline: "Exploring fresh ideas, technical breakthroughs, and timeless stories",
      description: "An avid reader passionate about diving into technical literature on artificial intelligence, insightful non-fiction books on human behavior, and thoughtful essays. Reading broadens my perspective, improves structured thinking, and sparks creative problem-solving.",
      iconName: "BookOpen",
      quote: "\"A reader lives a thousand lives before he dies. Reading expands imagination and sharpens critical analysis.\"",
      items: ["AI & Data Science Articles", "Self-Improvement & Psychology", "Inspirational Biographies", "Fiction & Cultural Classics"],
    },
    {
      id: "listening",
      title: "Active Listening & Audio Exploration",
      tagline: "Deep attentiveness, podcasts, and appreciating nuanced soundscapes",
      description: "Listening is both an art and a vital communication skill. I cherish listening attentively to people's stories, podcasts on technology and leadership, and ambient nature sounds. Being an active listener makes me a more empathetic teammate and intuitive software designer.",
      iconName: "Headphones",
      quote: "\"Most people do not listen with the intent to understand; they listen with the intent to reply. True listening builds bridges.\"",
      items: ["Tech & Innovation Podcasts", "Storytelling & Audiobooks", "Calming Instrumental Tracks", "Empathetic Active Listening in Teams"],
    },
    {
      id: "family",
      title: "Spending Time with Family",
      tagline: "Rooted in warmth, traditional values, and cherished moments",
      description: "Nothing grounds me more than quality time with my family in our coastal hometown of Brahmavar, Udupi. Sharing conversations around the dinner table, celebrating traditional festivities, and seeking wisdom from elders provides enduring motivation and reminds me why creating compassionate technology matters.",
      iconName: "HeartHandshake",
      quote: "\"Family is not just an important thing; it is everything. It is the steady anchor behind every achievement.\"",
      items: ["Festive Celebrations in Udupi", "Home Cooking & Sharing Meals", "Evening Conversations & Stories", "Unconditional Support & Values"],
    },
  ] as Hobby[],
};
