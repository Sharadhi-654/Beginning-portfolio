# Sharadhi Acharya — AI & Data Science Portfolio

A modern, high-performance portfolio website built for **Sharadhi Acharya**, undergraduate engineer in Artificial Intelligence and Data Science at SMVITM (CGPA: 8.2).

Includes all resume credentials, hackathon projects (EduQuest, Banking Management System, Skill Mapper, AI Voice for Mute Mate), certifications (MathWorks ML, Agentic AI), and personal hobbies (Singing, Reading, Active Listening, and Family).

---

## 🚀 How to Run Locally in VS Code

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **Git** installed on your system.
- Download Node.js: [https://nodejs.org/](https://nodejs.org/)
- Download Git: [https://git-scm.com/](https://git-scm.com/)
- Download VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### Step 1: Open the Project in VS Code
1. Open Visual Studio Code.
2. Click **File > Open Folder...** and choose this project folder.
3. Open the built-in terminal by pressing `` Ctrl + ` `` (Windows/Linux) or `` Cmd + ` `` (Mac).

---

### Step 2: Install Dependencies
In the VS Code terminal, run:
```bash
npm install
```
This installs React, Vite, Tailwind CSS, Lucide icons, and TypeScript.

---

### Step 3: Run the Development Server
In the VS Code terminal, run:
```bash
npm run dev
```
You will see output like:
```
  VITE v8.x.x  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Hold `Ctrl` (or `Cmd`) and click the link, or open your web browser and navigate to `http://localhost:5173`. Any changes you make to the code in VS Code will immediately update in your browser.

---

### Step 4: Build for Production
To create an optimized production build for deployment:
```bash
npm run build
```
This generates a static `dist/` directory containing the optimized HTML, CSS, JavaScript, and asset bundles.

---

## 🐙 How to Push to GitHub

### Step 1: Initialize Git and Commit
In your VS Code terminal:
```bash
git init
git add .
git commit -m "Initial commit: Sharadhi Acharya Portfolio"
```

### Step 2: Connect to your GitHub Repository
1. Go to [https://github.com/new](https://github.com/new) and create a new repository (e.g. `Sharadhi-654/portfolio`).
2. Run the following commands in your VS Code terminal:
```bash
git branch -M main
git remote add origin https://github.com/Sharadhi-654/portfolio.git
git push -u origin main
```

---

## 🌐 Free 1-Click Hosting Options

### Option A: Vercel (Recommended)
1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New > Project** and select your `portfolio` repository.
3. Keep default settings (`Framework Preset: Vite`) and click **Deploy**.
4. Your site will be live with a free custom SSL domain!

### Option B: GitHub Pages
1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Choose the **Static HTML** or **Vite** starter workflow to deploy `dist/` automatically.

---

## 📁 Project Structure

```
├── index.html                 # HTML entry point with Google Fonts and meta tags
├── metadata.json              # Applet metadata
├── package.json               # NPM scripts and dependencies
├── vite.config.ts             # Vite configuration with Tailwind CSS plugin
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.tsx               # React application entry
│   ├── App.tsx                # Main layout orchestrator
│   ├── index.css              # Tailwind v4 configuration, theme, and print styles
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model from resume & hobbies
│   ├── assets/
│   │   └── images/            # High-fidelity project screenshots & avatar
│   └── components/
│       ├── Navbar.tsx         # Responsive top bar (3-zone contract)
│       ├── Hero.tsx           # Split hero with avatar, metrics, bio
│       ├── AboutSection.tsx   # Academics, Udupi heritage, soft skills
│       ├── SkillsSection.tsx  # Filterable skill cards (Languages, Web, DB, Tools)
│       ├── ProjectsSection.tsx# Bento showcase with interactive architecture modals
│       ├── ProjectModal.tsx   # Deep-dive project breakdown modal
│       ├── HackathonsCertificatesSection.tsx # IEEE hackathon, Ideathons, MathWorks
│       ├── HobbiesSection.tsx # Singing (audio synth), reading, listening, family
│       ├── ContactSection.tsx # Direct message form + 1-click copy phone/email
│       ├── ResumeModal.tsx    # ATS-formatted printable CV with 1-click PDF export
│       ├── RunInVSCodeModal.tsx # Built-in interactive VS Code & GitHub runner
│       └── Footer.tsx         # Quiet footer with credits and back-to-top
└── README.md                  # Complete documentation
```

---

## 📬 Contact Info
- **Name:** Sharadhi Acharya
- **Email:** [sharadhiacharya654@gmail.com](mailto:sharadhiacharya654@gmail.com)
- **Phone:** +91 9108250673
- **LinkedIn:** [linkedin.com/in/sharadhi-acharya-b8a167367](https://www.linkedin.com/in/sharadhi-acharya-b8a167367)
- **GitHub:** [github.com/Sharadhi-654](https://github.com/Sharadhi-654)
- **Location:** Brahmavar, Udupi, Karnataka, India
