# Sharadhi Acharya — AI & Data Science Portfolio

A modern, high-performance portfolio website built for Sharadhi Acharya, undergraduate engineer in Artificial Intelligence and Data Science at Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Udupi (CGPA: 8.2).
Showcases full resume credentials, hackathon projects (EduQuest, Banking Management System, Skill Mapper, AI Voice Assistive Tech), certifications (MathWorks Machine Learning Onramp, Agentic AI), and creative pursuits (Classical Singing, Reading, Active Listening, and Family).
🌟 Highlights & Features
Hero & Developer Terminal: High-tech interactive code terminal and monogram identity card featuring live stack metadata.
Academic & Heritage Story: Academic journey at SMVITM Bantakal and technical vision grounded in Udupi, Karnataka.
Categorized Technical Skills: Interactive skill matrices across Programming Languages, Web Frameworks, Databases & Tools.
Bento Project Showcase: In-depth case studies with architecture breakdowns, technical challenges, and live GitHub links.
Hackathons & Certifications: IEEE ANVESHAN 2025, IDEATHON 2025, and MathWorks credentials.
Creative Pursuits & Audio Synth: Interactive classical music frequencies showcase, literature reflections, and core values.
Printable ATS Resume & PDF Export: Formatted single-page resume with standard browser 1-click print and PDF download.
Direct Contact Grid: 1-click email and phone copying plus direct links to LinkedIn and GitHub.

💻 How to Run Locally in VS Code
Prerequisites
Make sure you have Node.js (v18 or higher) installed:
Download Node.js: https://nodejs.org/
Download VS Code: https://code.visualstudio.com/
Step 1: Open the Project in VS Code
Open Visual Studio Code.
Click File > Open Folder... and select this project directory.
Open the integrated terminal (Ctrl + ` on Windows / Cmd + ` on Mac).

Step 2: Install Dependencies
code
Bash
npm install
(If you encounter any peer dependency flags on older npm versions, use npm install --legacy-peer-deps)

Step 3: Start the Development Server
code
Bash
npm run dev
Open your browser and navigate to:
code
Code
http://localhost:3000
Any changes saved in VS Code will automatically update live in your browser!

Step 4: Build for Production
To generate an optimized production build in the dist/ directory:
code
Bash
npm run build

🐙 Push Updates to GitHub
Whenever you make updates in VS Code, run these 3 commands:
code
Bash
git add .
git commit -m "Update portfolio content"
git push
Your changes will automatically reflect on https://github.com/Sharadhi-654/Beginning-portfolio.



📁 Project Structure
code
Code
├── index.html                 # HTML entry point with typography and meta tags
├── package.json               # Scripts and dependencies (React 19, Vite, Tailwind v4)
├── vite.config.ts             # Vite configuration with Tailwind CSS plugin
├── tsconfig.json              # TypeScript strict configuration
├── src/
│   ├── main.tsx               # React application entry point
│   ├── App.tsx                # Main layout coordinator
│   ├── index.css              # Tailwind v4 configuration, theme, and print styles
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model for all resume and project data
│   ├── assets/
│   │   └── images/            # High-fidelity project screenshots & assets
│   └── components/
│       ├── Navbar.tsx         # Responsive navigation bar with quick CV trigger
│       ├── Hero.tsx           # Split hero with Developer Terminal & monogram card
│       ├── AboutSection.tsx   # Academics, Udupi heritage, soft skills
│       ├── SkillsSection.tsx  # Filterable skill cards (Languages, Web, DB, Tools)
│       ├── ProjectsSection.tsx# Bento showcase with interactive architecture modals
│       ├── ProjectModal.tsx   # Deep-dive project breakdown modal
│       ├── HackathonsCertificatesSection.tsx # IEEE hackathon, Ideathons, MathWorks
│       ├── HobbiesSection.tsx # Classical singing synth, reading, listening, family
│       ├── ContactSection.tsx # Direct 4-card contact grid (Email, Phone, GitHub, LinkedIn)
│       ├── ResumeModal.tsx    # ATS-formatted printable CV with 1-click PDF export
│       └── Footer.tsx         # Quiet footer with copyright and back-to-top
└── README.md                  # Documentation
📬 Contact & Connect
Engineer: Sharadhi Acharya
Degree: BE in Artificial Intelligence & Data Science (2024–2028)
Institution: Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM), Udupi
Email: sharadhiacharya654@gmail.com
LinkedIn: linkedin.com/in/sharadhi-acharya-b8a167367
GitHub: github.com/Sharadhi-654
Location: Brahmavar, Udupi, Karnataka, India
