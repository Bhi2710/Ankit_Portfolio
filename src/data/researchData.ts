export interface ResearchProject {
  id: string;
  title: string;
  period: string;
  supervisor: string;
  institution: string;
  description: string;
  highlights: string[];
  tags: string[];
  status?: 'active' | 'completed' | 'in_preparation';
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  formattedReference: string;
  venue: string;
  year: number;
  status: 'published' | 'in_prep' | 'conference_proceedings';
  abstract: string;
  doi?: string;
  links: { name: string; url: string; type: 'pdf' | 'external' }[];
  bibtex?: string;
  categories: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: "diffuse-gamma-ray",
    title: "Diffuse Galactic Gamma-Ray Emission",
    period: "Sep 2025 – Present",
    supervisor: "Dr. Satyendra Thoudam",
    institution: "Khalifa University, Abu Dhabi, UAE",
    description: "Modeling diffuse Galactic γ-ray emission using cosmic-ray distributions derived from weak-shock reacceleration and diffusion frameworks.",
    highlights: [
      "Simulating high-energy photon yields from cosmic-ray hadron and lepton interactions with the interstellar medium and interstellar radiation fields (ISRF).",
      "Comparing model predictions against Fermi-LAT and ground-based atmospheric Cherenkov telescope data."
    ],
    tags: ["Gamma-Ray Emission", "Weak-Shock Reacceleration", "CRPropa", "Milky Way"],
    status: "active"
  },
  {
    id: "electron-propagation",
    title: "Propagation of Galactic Cosmic-Ray Electrons (GeV–TeV)",
    period: "Apr 2025 – Sep 2025",
    supervisor: "Dr. Satyendra Thoudam",
    institution: "Khalifa University, Abu Dhabi, UAE",
    description: "Investigating the ~TeV spectral break in Galactic cosmic-ray electrons, constraining maximum nearby supernova remnant (SNR) contributions and refining inverse-Compton loss modeling with updated ISRF datasets.",
    highlights: [
      "Constrained maximum allowable contribution from nearby pulsars and SNR sources (e.g. Vela, Cygnus Loop).",
      "Refined inverse-Compton radiative loss calculations across diverse Galactic ISM phases.",
      "Manuscript completed and in preparation for publication."
    ],
    tags: ["Cosmic-Ray Electrons", "Inverse-Compton", "Supernova Remnants", "ISRF"],
    status: "in_preparation"
  },
  {
    id: "weak-shock-reacceleration",
    title: "Weak-Shock Reacceleration of Galactic Cosmic Rays",
    period: "Aug 2024 – Jul 2025",
    supervisor: "Dr. Satyendra Thoudam",
    institution: "Khalifa University, Abu Dhabi, UAE",
    description: "Established a Bayesian inference framework for Galactic cosmic-ray propagation incorporating weak-shock reacceleration by expanding SNR shells.",
    highlights: [
      "Achieved unified fits to primary (p, He) and secondary (B/C, sub-Fe) spectra, reproducing observed spectral hardening below ~100 GeV and at TeV scales.",
      "Integrated multi-experiment datasets from AMS-02, CALET, CREAM, DAMPE, and Voyager.",
      "Developed and benchmarked a hybrid C++–Python solver with MPI-based nested parallelism optimized for large-scale MCMC parameter estimation on HPC clusters using SLURM."
    ],
    tags: ["Bayesian MCMC", "Diffusion & Reacceleration", "AMS-02 / Voyager", "MPI Parallelism", "HPC"],
    status: "completed"
  },
  {
    id: "diffusive-shock-acceleration",
    title: "Modeling Acceleration of Cosmic Rays at Supernova Remnants",
    period: "Apr 2023 – Aug 2024",
    supervisor: "Dr. Satyendra Thoudam",
    institution: "Khalifa University, Abu Dhabi, UAE",
    description: "Developed a computational framework to solve complex time-dependent transport equations for diffusive shock acceleration (DSA) at supernova remnant shocks.",
    highlights: [
      "Formulated numerical solvers for particle injection, energy-dependent diffusion, and maximum cutoff energies during SNR expansion phases.",
      "Assessed shock velocity evolution and magnetic field amplification in Sedov-Taylor and free expansion stages."
    ],
    tags: ["Diffusive Shock Acceleration", "Time-Dependent Transport", "Supernova Remnants", "Numerical Solvers"],
    status: "completed"
  },
  {
    id: "cosmological-parameter-fitting",
    title: "Model-Dependent Cosmological Parameter Fitting (Master’s Thesis)",
    period: "May 2021 – Apr 2022",
    supervisor: "Dr. Harvinder Kaur Jassal",
    institution: "Indian Institute of Science Education and Research (IISER) Mohali, India",
    description: "Performed Bayesian constraints on Friedmann-Robertson-Walker (FRW) dark-energy parameterizations using combined cosmological datasets.",
    highlights: [
      "Constructed MCMC pipelines to constrain dark energy equation-of-state parameters w(z) using Pantheon Type Ia Supernovae, Hubble parameter measurements H(z), and Baryon Acoustic Oscillations (BAO).",
      "Evaluated cosmological model selection criteria using Bayesian evidence and Akaike information criteria."
    ],
    tags: ["Cosmology", "Dark Energy", "MCMC", "Pantheon SN Ia", "BAO"],
    status: "completed"
  },
  {
    id: "general-relativity-orbits",
    title: "Perihelion Precession of Mercury & Bending of Light",
    period: "May 2020 – Aug 2020",
    supervisor: "Dr. Harvinder Kaur Jassal",
    institution: "IISER Mohali, India",
    description: "Investigated general relativistic corrections to planetary orbits; simulated Mercury's precession and light deflection in MATLAB.",
    highlights: [
      "Simulated Schwarzschild geodesics for massive and massless particles.",
      "Numerically confirmed the 43 arcseconds/century anomalous perihelion shift of Mercury."
    ],
    tags: ["General Relativity", "Orbital Mechanics", "MATLAB", "Gravitational Lensing"],
    status: "completed"
  },
  {
    id: "astrometry-ngc663",
    title: "Astrometry and Photometry of Open Cluster NGC 663",
    period: "May 2019 – Dec 2019",
    supervisor: "Prof. Kulinder Pal Singh",
    institution: "IISER Mohali, India",
    description: "Performed astrometric and photometric analysis using IRAF and SAO DS9; corrected coordinates using AstroSat/UVIT ultraviolet data.",
    highlights: [
      "Extracted point spread functions (PSF) and performed aperture photometry on optical and UV frames.",
      "Identified blue straggler candidates and member stars using color-magnitude diagrams."
    ],
    tags: ["Observational Astronomy", "AstroSat / UVIT", "IRAF & DS9", "Photometry"],
    status: "completed"
  }
];

export const publications: PublicationItem[] = [
  {
    id: "icrc2025-bayesian-gcr",
    title: "Bayesian Modeling of Galactic Cosmic-Ray Propagation",
    authors: "Yadav A., Thoudam S., Eichmann B., & Rachen J. P.",
    formattedReference: "Yadav A., Thoudam S., Eichmann B., & Rachen J. P., 2025, Bayesian Modeling of Galactic Cosmic-Ray Propagation, Proceedings of Science (ICRC2025), 501, 154.",
    venue: "Proceedings of Science (39th ICRC 2025, Geneva)",
    year: 2025,
    status: "conference_proceedings",
    doi: "10.22323/1.501.0154",
    abstract: "Recent measurements from advanced cosmic-ray detectors have revealed spectral features, including a hardening in the GeV–TeV energy range, challenging standard models of cosmic-ray acceleration and propagation. Re-acceleration of cosmic rays by weak shocks in the Galaxy provides a promising explanation, accounting for the observed spectral features of different nuclei and the boron-to-carbon (B/C) ratio. In this framework, cosmic rays are accelerated by strong supernova shocks and then diffuse through the Galaxy. During propagation, they undergo re-acceleration when encountering expanding supernova-remnant shocks. Because older remnants are larger and therefore more likely to be encountered than younger ones, re-acceleration is predominantly driven by weaker shocks, yielding a softer particle spectrum below ∼100 GeV. At higher energies, the spectrum is dominated by cosmic rays from young supernova remnants. In this study, we use Markov Chain Monte Carlo (MCMC) to infer key parameters governing cosmic-ray transport—diffusion properties, re-acceleration strength, and solar modulation—using observational data from AMS-02, CALET, CREAM, DAMPE, and Voyager. Preliminary results indicate that weak-shock re-acceleration can consistently reproduce the proton spectrum and the B/C ratio.",
    links: [
      { name: "PoS PDF", url: "https://pos.sissa.it/501/154/pdf", type: "pdf" },
      { name: "DOI: 10.22323/1.501.0154", url: "https://doi.org/10.22323/1.501.0154", type: "external" }
    ],
    bibtex: `@inproceedings{Yadav2025BayesianGCR,
  author    = {Yadav, A. and Thoudam, S. and Eichmann, B. and Rachen, J. P.},
  title     = {Bayesian Modeling of Galactic Cosmic-Ray Propagation},
  booktitle = {Proceedings of Science},
  series    = {39th International Cosmic Ray Conference (ICRC2025)},
  volume    = {501},
  pages     = {154},
  year      = {2025},
  doi       = {10.22323/1.501.0154}
}`,
    categories: ["Galactic cosmic rays", "Astroparticle physics", "Bayesian inference", "CRPropa"]
  },
  {
    id: "electron-spectrum-prep",
    title: "Constraints on the Contribution of Local Sources to the Observed Cosmic-Ray Electron Spectrum",
    authors: "Yadav A. & Thoudam S.",
    formattedReference: "Yadav, A., & Thoudam, S. Constraints on the contribution of local sources to the observed cosmic-ray electron spectrum. In preparation, 2025.",
    venue: "In preparation (2025)",
    year: 2025,
    status: "in_prep",
    abstract: "A comprehensive investigation of the ~TeV spectral break in Galactic cosmic-ray electrons. We place upper bounds on the contribution of nearby supernova remnants and pulsar wind nebulae, and refine the inverse-Compton energy-loss modeling using updated interstellar radiation field (ISRF) distributions.",
    links: [
      { name: "In Preparation", url: "#", type: "external" }
    ],
    bibtex: `@article{YadavThoudam2025Electrons,
  author  = {Ankit Yadav and Satyendra Thoudam},
  title   = {Constraints on the contribution of local sources to the observed cosmic-ray electron spectrum},
  year    = {2025},
  journal = {In preparation}
}`,
    categories: ["Cosmic-Ray Electrons", "Supernova Remnants", "Inverse-Compton"]
  },
  {
    id: "weak-shock-unified-prep",
    title: "Weak-Shock Reacceleration as a Unified Framework for Galactic Cosmic-Ray Spectra",
    authors: "Yadav A., Thoudam S., Eichmann B., & Rachen J. P.",
    formattedReference: "Yadav, A., Thoudam, S., Eichmann, B., Rachen, J. P. Weak-shock reacceleration as a unified framework for Galactic cosmic-ray spectra. In preparation, 2025.",
    venue: "In preparation (2025)",
    year: 2025,
    status: "in_prep",
    abstract: "Developing a global Bayesian parameter estimation framework that self-consistently models diffusion, weak-shock reacceleration, and solar modulation to simultaneously fit primary and secondary cosmic-ray species across the GeV to multi-TeV energy regime.",
    links: [
      { name: "In Preparation", url: "#", type: "external" }
    ],
    bibtex: `@article{Yadav2025UnifiedReacc,
  author  = {Ankit Yadav and Satyendra Thoudam and Bj{\\"o}rn Eichmann and J{\\"o}rg P. Rachen},
  title   = {Weak-shock reacceleration as a unified framework for Galactic cosmic-ray spectra},
  year    = {2025},
  journal = {In preparation}
}`,
    categories: ["Weak-Shock Reacceleration", "Bayesian Inference", "Cosmic-Ray Spectra"]
  }
];
