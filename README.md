# Ankit Yadav — Academic & Research Portfolio

---

## 📁 Project File Structure

```
Personal_Page/
├── index.html                  # HTML entry point with metadata & Google fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundling & development server settings
├── tailwind.config.js          # Tailwind theme & astrophysics palette configuration
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project documentation & file guide
│
├── public/                     # Static assets served as-is
│   ├── cv/
│   │   └── CV_Ankit_Yadav.pdf  # Downloadable & embeddable CV PDF document
│   ├── files/
│   │   └── talks/              # Downloadable presentation slides PDFs
│   └── images/
│       ├── headshot.jpg        # Profile portrait photo
│       ├── KU_logo.png         # Khalifa University official logo
│       ├── ORCID_iD.svg        # ORCID vector icon
│       ├── Google_Scholar_logo.svg
│       ├── LinkedIn_icon.svg
│       └── Gmail_icon_(2020).svg
│
└── src/
    ├── main.tsx                # Application bootstrap with HashRouter
    ├── App.tsx                 # Root layout, router setup & global layout
    ├── index.css               # Tailwind directives, animations & custom styles
    │
    ├── components/             # Global layout & shared UI components
    │   ├── Navbar.tsx          # Space Navy header with desktop badges & mobile drawer
    │   ├── Footer.tsx          # Academic footer with CC BY 4.0 license, ORCID & links
    │   └── ScrollToTop.tsx     # Automatic scroll restoration on route navigation
    │
    ├── data/                   # Structured TypeScript data models (Easy to update!)
    │   ├── profileData.ts      # Profile bio, education, GPAs, and social URLs
    │   ├── researchData.ts     # Detailed research projects, publications & BibTeX
    │   ├── projectsData.ts     # Computational astrophysics toolsets & codes
    │   ├── talksData.ts        # Conferences, seminars, posters & workshops
    │   ├── moreData.ts         # Fellowships, technical skills & outreach activities
    │   └── teachingData.ts     # Laboratory instruction & academic mentorship
    │
    └── pages/                  # Dedicated multi-page route views
        ├── HomePage.tsx        # Welcome hero, research pillars & featured highlights
        ├── AboutPage.tsx       # Biographical journey, education & supervisors
        ├── ResearchPage.tsx    # Research investigations & publication list
        ├── ProjectsPage.tsx    # Computational physics codes & software showcase
        ├── TalksPage.tsx       # Chronological talks with live search & filters
        ├── TeachingPage.tsx    # Astronomy lab courses & teaching fellowships
        ├── CVPage.tsx          # Dual structured / embedded PDF CV viewer
        └── MorePage.tsx        # Awards, skills matrix & departmental service
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your system.

- Check Node.js version:
  ```powershell
  node -v
  ```
- Check npm version:
  ```powershell
  npm -v
  ```

### Installation
Clone or navigate to the project directory and install the dependencies:
```powershell
cd C:\DemoProject\AnkitBhai_Personal_Page\Personal_Page
npm install
```

### Running the Development Server
To launch the development server with Hot Module Replacement (HMR):
```powershell
npm run dev
```
Open your browser at **`http://localhost:3000/`**.

### Building for Production
To generate an optimized, production-ready build:
```powershell
npm run build
```
The compiled files will be created in the **`dist/`** folder.

### Previewing the Production Build
To preview the generated production build locally:
```powershell
npm run preview
```

---

## ✏️ How to Update Content

All website text, research publications, conference talks, and personal details are separated cleanly in the **`src/data/`** directory. You do not need to modify any JSX/React components to update your information:


---

## 🌐 Routes & Pages

- **`/`** — Home welcome hero, research pillars, featured publication & quick exploration portal.
- **`/about`** — Detailed scientific journey, affiliations, and education timeline.
- **`/research`** — 7 detailed research projects and publications with abstract expansion and one-click BibTeX copy.
- **`/projects`** — Computational tools (Hybrid C++-Python transport solver, Bayesian MCMC pipelines, CRPropa simulations).
- **`/talks`** — Chronological conference talks, posters, seminars, and training with real-time text search and category filter pills.
- **`/teaching`** — Introduction to Astronomy Laboratory instruction and academic mentorship.
- **`/cv`** — Direct PDF download button, structured resume overview, and embedded responsive PDF viewer.
- **`/more`** — Fellowships, awards, categorized technical skills matrix, and departmental leadership activities.

---

## 🎨 Theme & Styling

The color system preserves the astrophysics aesthetic:
- **Space Navy (`#0b1b2b`)**: Navbar, hero banners, headers, dark accent badges.
- **Teal (`#1c7c86`)**: Primary accent, active navigation states, section tags.
- **Gold (`#e5b35d`)**: Honors, awards, and highlights.
- **Deep Blue (`#2563eb`)**: Interactive links and citations.
- **Background (`#f8fafc`)**: Crisp slate-50 background with readable typography.

---


