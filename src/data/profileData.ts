export interface Profile {
  name: string;
  title: string;
  institution: string;
  department: string;
  location: string;
  advisor: string;
  gpa: string;
  headshot: string;
  email: {
    primary: string;
    institution: string;
  };
  orcid: string;
  scholarUrl: string;
  kuProfileUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  years: string;
  bio: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
    thesis?: string;
    supervisor?: string;
    gpaOrCpi?: string;
    notes?: string;
  }[];
  researchInterests: string[];
  stats: { label: string; value: string }[];
}

export const profileData: Profile = {
  name: "Ankit Yadav",
  title: "PhD Candidate in Astroparticle Physics",
  institution: "Khalifa University",
  department: "Department of Physics",
  location: "Abu Dhabi, United Arab Emirates",
  advisor: "Dr. Satyendra Thoudam",
  gpa: "3.91 / 4.00",
  headshot: "/images/headshot.jpg",
  email: {
    primary: "yankit0511@gmail.com",
    institution: "100062650@ku.ac.ae",
  },
  orcid: "0009-0001-3528-5910",
  scholarUrl: "https://scholar.google.com/citations?user=-kHzTn0AAAAJ&hl=en",
  kuProfileUrl: "https://www.ku.ac.ae/college-people/ankit-yadav/",
  linkedinUrl: "https://www.linkedin.com/in/ankit-yadav-b915a9181/",
  githubUrl: "https://github.com/your-username",
  years: "2024–2026",
  bio: [
    "I am a PhD candidate in Astroparticle Physics at the Department of Physics, Khalifa University, Abu Dhabi, supervised by Dr. Satyendra Thoudam.",
    "My doctoral research investigates the origin, acceleration, and propagation of high-energy cosmic rays using data from space- and ground-based experiments (AMS-02, CALET, CREAM, DAMPE, Voyager). I develop Bayesian Markov Chain Monte Carlo (MCMC) frameworks and numerical simulations (CRPropa) to constrain diffusion properties, weak-shock reacceleration, and solar modulation in the Milky Way.",
    "Before joining Khalifa University, I completed my integrated BS–MS dual degree in Physics (with a minor in Astronomy) at the Indian Institute of Science Education and Research (IISER) Mohali, India, working on Bayesian dark energy modeling and cosmological parameter estimation."
  ],
  education: [
    {
      degree: "Doctor of Philosophy (PhD)",
      field: "Astroparticle Physics",
      institution: "Khalifa University",
      location: "Abu Dhabi, UAE",
      period: "Aug 2022 – Present",
      thesis: "Investigation of the origin of high-energy cosmic rays using data from cosmic-ray, gamma-ray, and neutrino experiments",
      supervisor: "Dr. Satyendra Thoudam",
      gpaOrCpi: "GPA: 3.91 / 4.00",
      notes: "Recipient of the Doctoral Research / Teaching Scholarship (DRTS)"
    },
    {
      degree: "BS–MS Dual Degree",
      field: "Physics (Minor in Astronomy)",
      institution: "Indian Institute of Science Education and Research (IISER) Mohali",
      location: "Mohali, India",
      period: "Aug 2017 – May 2022",
      thesis: "Bayesian modeling of dark energy: constraining cosmological parameters with observational data",
      supervisor: "Dr. Harvinder Kaur Jassal",
      gpaOrCpi: "CPI: 8.4 / 10.0",
      notes: "Recipient of the Merit-Cum-Means National Fellowship"
    }
  ],
  researchInterests: [
    "Astroparticle physics: origin, acceleration, and propagation of high-energy cosmic rays",
    "Multi-messenger astrophysics integrating cosmic rays, gamma rays, and neutrinos",
    "Cosmology & large-scale universe: dark energy, structure formation, and early-universe physics",
    "Numerical and computational modeling of high-energy astrophysical processes",
    "Data-driven and Bayesian MCMC machine learning approaches in astrophysics"
  ],
  stats: [
    { label: "Doctoral GPA", value: "3.91 / 4.00" },
    { label: "Focus Area", value: "Galactic Cosmic Rays" },
    { label: "Methodology", value: "Bayesian & MCMC" },
    { label: "Institution", value: "Khalifa University" }
  ]
};
