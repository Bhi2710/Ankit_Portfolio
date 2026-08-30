export interface AwardItem {
  id: string;
  title: string;
  date: string;
  dateDisplay?: string;
  location: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  experience: string[];
  skillsList: string[];
  links?: { name: string; url: string }[];
  certifications?: { name: string; url: string }[];
}

export interface OutreachItem {
  id: string;
  title: string;
  date: string;
  dateDisplay?: string;
  location: string;
  description: string;
  roleType?: string;
}

export const awardsData: AwardItem[] = [
  {
    id: "drts-scholarship",
    title: "Doctoral Research / Teaching Scholarship (DRTS)",
    date: "2022-09-01",
    dateDisplay: "Sep 2022 – Present",
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Fully funded scholarship supporting PhD research in astroparticle physics at Khalifa University. The award combines research funding with structured teaching responsibilities in the physics program.",
    badge: "Full Scholarship"
  },
  {
    id: "hackathon-award",
    title: "3rd Place – AI-Driven Drug Discovery Hackathon",
    date: "2024-11-16",
    dateDisplay: "November 2024",
    location: "Insilico Medicine, Masdar City, UAE",
    description: "Team-based hackathon focused on AI-driven molecular design and drug discovery. Our team developed and pitched a workflow for using generative models to propose candidate molecules.",
    badge: "3rd Place"
  },
  {
    id: "mcm-fellowship",
    title: "Merit-Cum-Means Fellowship",
    date: "2020-01-01",
    dateDisplay: "2020 – 2022",
    location: "Ministry of Minority Affairs, Government of India",
    description: "National fellowship supporting MS studies at IISER Mohali. The fellowship recognized both academic performance and financial need during graduate work.",
    badge: "National Fellowship"
  },
  {
    id: "gate-physics",
    title: "GATE Qualified in Physics",
    date: "2022-02-01",
    dateDisplay: "February 2022",
    location: "Graduate Aptitude Test in Engineering (India)",
    description: "Qualified the highly competitive national-level Graduate Aptitude Test in Engineering (GATE) in Physics, used for postgraduate admissions and fellowships across India.",
    badge: "National Exam"
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "computational",
    title: "Computational & Physics Modeling",
    description: "Statistical inference and numerical simulation pipelines for astrophysics.",
    skillsList: [
      "Bayesian Inference",
      "Markov Chain Monte Carlo (MCMC)",
      "Uncertainty Quantification",
      "CRPropa Simulations",
      "Cosmic-Ray Transport",
      "Parameter Estimation"
    ],
    experience: [
      "Bayesian inference and uncertainty quantification for Galactic cosmic-ray propagation models.",
      "Parameter scans and model comparison for the Galactic cosmic-ray propagation project.",
      "Analysis and publication-grade visualization of multi-experiment simulation outputs."
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Scientific and systems programming languages for physics analysis and simulations.",
    skillsList: [
      "Python",
      "C++",
      "Fortran",
      "C",
      "MATLAB",
      "Bash / Shell"
    ],
    experience: [
      "Python for daily PhD analysis, numerical pipelines, and publication plotting.",
      "C++ and Fortran for performant CRPropa extensions in cosmic-ray propagation code.",
      "C and MATLAB used in earlier coursework and computational utilities."
    ],
    links: [
      { name: "GitHub Profile", url: "https://github.com/your-username" }
    ]
  },
  {
    id: "frameworks",
    title: "Software & Frameworks",
    description: "Specialized tools and libraries for high-energy physics and statistical computation.",
    skillsList: [
      "PyMC",
      "emcee",
      "ROOT (CERN)",
      "Mathematica",
      "PyBind11",
      "NumPy / SciPy",
      "Astropy"
    ],
    experience: [
      "PyMC and emcee for Bayesian modelling of cosmic-ray propagation parameters.",
      "ROOT for event-level analysis and histogramming in high-energy physics contexts.",
      "Mathematica for symbolic checks and analytic calculations.",
      "PyBind11 for exposing C++ simulation code to Python analysis scripts."
    ]
  },
  {
    id: "hpc",
    title: "High-Performance Computing (HPC)",
    description: "Distributed computing and cluster administration workflows.",
    skillsList: [
      "SLURM",
      "Linux / Unix",
      "MPI",
      "OpenMP",
      "Git / GitHub",
      "Parallel Computing"
    ],
    experience: [
      "Regular SLURM orchestration on Linux clusters to run large ensembles of CRPropa simulations.",
      "MPI and OpenMP to parallelise propagation runs over multi-dimensional parameter grids.",
      "Profiling and optimization of C++ and Python code on high-performance supercomputing systems."
    ],
    certifications: [
      { name: "HPC & Parallel Programming Course", url: "https://example.com/hpc-course" }
    ]
  }
];

export const outreachData: OutreachItem[] = [
  {
    id: "dept-committee",
    title: "Secretary — Outreach, Recruitment, and Communications Committee",
    date: "2025-08-01",
    dateDisplay: "Aug 2025 – Present",
    location: "Department of Physics, Khalifa University, Abu Dhabi, UAE",
    description: "Serving on the departmental committee that coordinates outreach, recruitment, and communications. I help plan public-facing events, shape student-recruitment activities, and assist with departmental messaging.",
    roleType: "Leadership & Service"
  },
  {
    id: "ku-cern-masterclass",
    title: "Volunteer — KU–CERN International Masterclass",
    date: "2025-04-10",
    dateDisplay: "April 2025",
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Worked with high-school students during the KU–CERN International Masterclass, guiding them through Z₀ → ℓ⁺ℓ⁻ particle reconstruction using the HYPATIA event display and introducing core ideas in collider physics.",
    roleType: "Educational Outreach"
  },
  {
    id: "crpropa-committee",
    title: "Organizing Committee — CRPropa Conference on Astroparticle Propagation",
    date: "2025-01-06",
    dateDisplay: "January 2025",
    location: "Department of Physics, Khalifa University, Abu Dhabi, UAE",
    description: "Member of the local organizing committee for the CRPropa conference on astroparticle propagation. I helped with conference logistics, participant communications, and on-site session coordination.",
    roleType: "Conference Organizing"
  },
  {
    id: "astronomy-lab-instructor",
    title: "Primary Instructor — Introduction to Astronomy Lab",
    date: "2023-09-01",
    dateDisplay: "Fall 2023, Fall 2024 & Spring 2025",
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Designed and led laboratory sessions for undergraduate introductory astronomy courses, supervising student experiments, telescope sessions, and hands-on activities across multiple academic semesters.",
    roleType: "Teaching"
  },
  {
    id: "astronomy-day",
    title: "Organizing Committee — Astronomy Day",
    date: "2023-03-01",
    dateDisplay: "Spring 2023, Fall 2024 & Spring 2025",
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Helped organize Astronomy Day events at Khalifa University, including public telescope viewing, planetarium sessions, and interactive demonstrations aimed at school students and community visitors.",
    roleType: "Public Outreach"
  }
];
