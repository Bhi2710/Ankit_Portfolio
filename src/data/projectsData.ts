export interface ComputationalProject {
  id: string;
  title: string;
  category: 'Astrophysics Code' | 'Bayesian Inference' | 'Cosmology' | 'Data Pipeline';
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  relatedPaper?: string;
  iconName: string;
}

export const computationalProjects: ComputationalProject[] = [
  {
    id: "hybrid-cr-solver",
    title: "Hybrid C++–Python Cosmic-Ray Transport Solver",
    category: "Astrophysics Code",
    description: "A high-performance numerical transport engine coupling C++ simulation kernels with Python data analysis and Bayesian MCMC pipelines.",
    keyFeatures: [
      "MPI-based nested parallelization across supercomputer nodes",
      "SLURM-optimized cluster workflow execution",
      "PyBind11 zero-copy data bridges between C++ memory and NumPy arrays",
      "Unified solver for primary protons, helium, and secondary boron-to-carbon ratios"
    ],
    techStack: ["C++", "Python", "CRPropa", "MPI", "PyBind11", "SLURM", "Linux HPC"],
    githubUrl: "https://github.com/your-username",
    iconName: "Atom"
  },
  {
    id: "bayesian-mcmc-cr",
    title: "Bayesian MCMC Cosmic-Ray Parameter Inference Pipeline",
    category: "Bayesian Inference",
    description: "Markov Chain Monte Carlo statistical inference framework constraining diffusion coefficients, weak-shock reacceleration efficiency, and heliospheric solar modulation potentials.",
    keyFeatures: [
      "Multi-detector likelihood engine fitting AMS-02, CALET, CREAM, DAMPE, and Voyager measurements",
      "Posterior corner plotting and parameter covariance matrix estimation",
      "Automated convergence diagnostics (Gelman-Rubin statistic, autocorrelation time analysis)"
    ],
    techStack: ["Python", "PyMC", "emcee", "NumPy", "SciPy", "Matplotlib", "Corner.py"],
    relatedPaper: "PoS(ICRC2025) 154",
    iconName: "Binary"
  },
  {
    id: "time-dependent-dsa",
    title: "Time-Dependent Diffusive Shock Acceleration (DSA) Solver",
    category: "Astrophysics Code",
    description: "Numerical schemes for solving time-dependent particle transport equations for cosmic rays accelerated at expanding supernova remnant forward shocks.",
    keyFeatures: [
      "Finite-difference Crank-Nicolson numerical transport scheme",
      "Models time-varying Sedov-Taylor shock radius, velocity, and magnetic field decay",
      "Computes particle escape spectra and maximum acceleration cutoff energies"
    ],
    techStack: ["C++", "Fortran", "Python", "Numerical Methods"],
    iconName: "Cpu"
  },
  {
    id: "dark-energy-mcmc",
    title: "Cosmological Parameter Fitting Pipeline (Master’s Thesis)",
    category: "Cosmology",
    description: "Bayesian MCMC cosmological parameter estimation framework fitting Friedmann-Robertson-Walker dark energy parameterizations w(z).",
    keyFeatures: [
      "Integrated Pantheon Type Ia Supernova distance modulus database",
      "Constrained Hubble parameter measurements H(z) and Baryon Acoustic Oscillation (BAO) angular scales",
      "Akaike & Bayesian Information Criteria (AIC/BIC) model comparison"
    ],
    techStack: ["Python", "MCMC", "Astropy", "Cosmology"],
    iconName: "Globe2"
  },
  {
    id: "gr-orbit-simulation",
    title: "General Relativistic Schwarzschild Geodesic Simulator",
    category: "Astrophysics Code",
    description: "MATLAB numerical orbital simulation computing general relativistic perihelion shift of Mercury and photon deflection angles in curved spacetime.",
    keyFeatures: [
      "Runge-Kutta 4th-order ODE integrator for relativistic geodesic equations",
      "Confirmed the 43 arcseconds/century anomalous perihelion precession of Mercury"
    ],
    techStack: ["MATLAB", "General Relativity", "ODEs"],
    iconName: "Compass"
  },
  {
    id: "ngc663-photometry",
    title: "NGC 663 Open Cluster Astrometry & Photometry Pipeline",
    category: "Data Pipeline",
    description: "Observational astronomy data reduction and photometry workflow matching optical frames with AstroSat/UVIT ultraviolet data.",
    keyFeatures: [
      "Automated PSF extraction and aperture photometry using IRAF and SAO DS9",
      "Color-Magnitude Diagram (CMD) construction and cluster membership validation"
    ],
    techStack: ["IRAF", "SAO DS9", "AstroSat / UVIT", "Observational Astronomy"],
    iconName: "Telescope"
  }
];
