export interface CourseExperience {
  title: string;
  role: string;
  institution: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const teachingExperience: CourseExperience[] = [
  {
    title: "Introduction to Astronomy Laboratory",
    role: "Primary Lab Instructor",
    institution: "Department of Physics, Khalifa University, Abu Dhabi",
    period: "Fall 2023, Fall 2024 & Spring 2025",
    description: "Conducted practical laboratory sessions, guided observational astronomy sessions, and mentored undergraduate students through laboratory physics techniques.",
    responsibilities: [
      "Designed and delivered weekly laboratory experiments covering celestial mechanics, spectral analysis, and telescope optics.",
      "Assisted students with data acquisition, error analysis, and scientific report writing.",
      "Organized night sky observation sessions and telescope alignment training."
    ]
  },
  {
    title: "Doctoral Teaching Assistantship (DRTS)",
    role: "Teaching Fellow",
    institution: "Department of Physics, Khalifa University, Abu Dhabi",
    period: "2022 – Present",
    description: "Teaching fellowship duties integrated with the PhD program, supporting departmental undergraduate tutorials and problem-solving workshops.",
    responsibilities: [
      "Facilitated problem-solving recitation sessions for core undergraduate physics modules.",
      "Graded coursework, provided feedback, and held office hours for academic mentoring."
    ]
  }
];
