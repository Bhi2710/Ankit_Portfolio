export type TalkCategory = 'conference' | 'poster' | 'seminar' | 'training';

export interface TalkItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  year: number;
  location: string;
  description: string;
  category: TalkCategory;
  slides?: string | boolean; // string = relative url in files, true = coming soon
  poster?: string | boolean;
  links?: { name: string; url: string; icon?: string }[];
}

export const categoryLabels: Record<TalkCategory, string> = {
  conference: "Conference Presentations",
  poster: "Poster Presentations",
  seminar: "Academic & Seminar Presentations",
  training: "Workshops & Training",
};

export const talksData: TalkItem[] = [
  // 2025
  {
    id: "gsrc-2025-talk",
    title: "Bayesian modeling of Galactic cosmic-ray propagation",
    date: "2025-04-12",
    year: 2025,
    location: "Graduate Students Research Conference (GSRC 2025), American University of Sharjah, UAE",
    description: "Presented a Bayesian framework for modeling Galactic cosmic-ray propagation parameters.",
    category: "conference",
    slides: "/files/talks/Constrain_on_the_Maximum_Nearby_Contribution_to_the_All_Electron_Spectrum.pdf",
  },
  {
    id: "crpropa-2025-talk",
    title: "Bayesian modeling of Galactic cosmic-ray propagation",
    date: "2025-01-06",
    year: 2025,
    location: "CRPropa Conference on Astroparticle Propagation 2025, Khalifa University, Abu Dhabi, UAE",
    description: "Talk on Bayesian modeling of Galactic cosmic-ray propagation using CRPropa-based simulations.",
    category: "conference",
    slides: true, // coming soon
  },
  {
    id: "tevpa-2025-poster",
    title: "Bayesian analysis of Galactic cosmic-ray transport with weak-shock reacceleration",
    date: "2025-11-03",
    year: 2025,
    location: "TeV Particle Astrophysics Conference (TeVPA 2025), Valencia, Spain",
    description: "Poster on Bayesian analysis of Galactic cosmic-ray transport including weak-shock reacceleration.",
    category: "poster",
    poster: true,
  },
  {
    id: "icrc-2025-poster",
    title: "Bayesian modeling of cosmic-ray transport",
    date: "2025-07-15",
    year: 2025,
    location: "International Cosmic Ray Conference (ICRC 2025), CICG, Geneva, Switzerland",
    description: "Poster on Bayesian modeling of Galactic cosmic-ray transport presented at ICRC 2025.",
    category: "poster",
    poster: true,
  },
  {
    id: "lofar-ska-2025",
    title: "LOFAR/SKA/IFT Workshop 2025",
    date: "2025-06-02",
    year: 2025,
    location: "KIT Campus North, Germany (online)",
    description: "Workshop on LOFAR and SKA with sessions on information field theory–based radio data reconstruction.",
    category: "training",
  },
  {
    id: "seap-2025-school",
    title: "School on Experimental Astroparticle Physics (SEAP 2025)",
    date: "2025-03-09",
    year: 2025,
    location: "TIFR Ooty, India",
    description: "Hands-on school covering detector assembly, calibration, shower reconstruction, and lectures on cosmic rays, neutrinos, and multi-messenger astrophysics.",
    category: "training",
  },

  // 2024
  {
    id: "gsrc-2024-poster",
    title: "Numerical solution to time-dependent transport equations for cosmic rays originating from supernova remnants",
    date: "2024-04-20",
    year: 2024,
    location: "9th UAE Graduate Students Research Conference (GSRC 2024), UAE University, Al Ain, UAE",
    description: "Poster on numerical solutions to time-dependent transport equations for cosmic rays from supernova remnants.",
    category: "poster",
    poster: true,
  },
  {
    id: "vhepa-2024-workshop",
    title: "11th International Workshop on Very High Energy Particle Astronomy (VHEPA 2024)",
    date: "2024-10-17",
    year: 2024,
    location: "Indian Institute of Technology Kanpur, India (online)",
    description: "Workshop on very-high-energy particle astronomy and multi-messenger approaches.",
    category: "training",
  },
  {
    id: "ku-seminar-2024",
    title: "Cosmic Rays in the Gulf: High-Energy Astrophysics from Abu Dhabi",
    date: "2024-11-10",
    year: 2024,
    location: "Department of Physics, Khalifa University, Abu Dhabi, UAE",
    description: "Seminar on high-energy astrophysics and regional research developments at Khalifa University.",
    category: "seminar",
    slides: true,
  },

  // 2023
  {
    id: "ku-seminar-2023-transport",
    title: "Solving the time-dependent transport equation for cosmic rays",
    date: "2023-05-01",
    year: 2023,
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Seminar on numerical schemes for solving the time-dependent transport equation for cosmic rays from supernova remnants.",
    category: "seminar",
  },

  // 2022
  {
    id: "ku-seminar-frb-2022",
    title: "Dispersion measures of fast radio bursts",
    date: "2022-12-01",
    year: 2022,
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Seminar on using fast radio burst dispersion measures to probe baryons in the intergalactic medium.",
    category: "seminar",
  },
  {
    id: "ku-seminar-gw-2022",
    title: "Gravitational waves: history, detection, and prospects",
    date: "2022-12-02",
    year: 2022,
    location: "Khalifa University, Abu Dhabi, UAE",
    description: "Introductory seminar tracing the development of gravitational-wave astronomy and future detector prospects.",
    category: "seminar",
  },
  {
    id: "iiser-seminar-cosmo-apr-2022",
    title: "Model-dependent cosmological parameter fitting",
    date: "2022-04-01",
    year: 2022,
    location: "Indian Institute of Science Education and Research (IISER) Mohali, India",
    description: "Talk on fitting cosmological parameters using model-dependent dark energy parameterisations.",
    category: "seminar",
  },
  {
    id: "iiser-seminar-cosmo-dec-2022",
    title: "Model-dependent cosmological parameter fitting (Part II)",
    date: "2022-12-01",
    year: 2022,
    location: "Indian Institute of Science Education and Research (IISER) Mohali, India",
    description: "Follow-up seminar discussing refinements in model-dependent cosmological parameter fitting.",
    category: "seminar",
  },
  {
    id: "iiser-seminar-lss-2022",
    title: "Large-scale structures and galaxy clustering",
    date: "2022-04-15",
    year: 2022,
    location: "Indian Institute of Science Education and Research (IISER) Mohali, India",
    description: "Seminar on large-scale structure formation and galaxy clustering in modern cosmology.",
    category: "seminar",
  },

  // 2021
  {
    id: "tih-isi-workshop-2021",
    title: "Workshop on Data Analysis in Cosmology and Astroparticle Physics",
    date: "2021-08-01",
    year: 2021,
    location: "TIH–ISI Kolkata, India",
    description: "Training workshop on statistical and computational methods for cosmology and astroparticle data analysis.",
    category: "training",
  }
];
