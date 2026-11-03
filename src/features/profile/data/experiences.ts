import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "bandobasta",
    companyName: "Bandobasta Pvt. Ltd",
    positions: [
      {
        id: "flutter-dev-bandobasta",
        title: "Flutter Developer",
        employmentPeriod: {
          start: "02.2025",
          end: "04.2026",
        },
        employmentType: "Full-time",
        employmentLocation: "Lalitpur, Nepal",
        icon: "code",
        description: `- Spearheaded the development of the **Bandobasta App** using **Flutter** and **GetX** for reactive state management.
- Architected core modules: multi-service venue and hall reservations, and end-to-end integration for service providers (photographers, bridal makeup, DJs, mehendi artists).
- Designed fluid, responsive UI with real-time slot availability checking and dynamic schedule management.
- Collaborated closely with backend teams for robust REST API and payment gateway integration.
- Optimized app rendering, memory footprint, and transition performance across diverse Android and iOS devices.`,
        skills: [
          "Flutter",
          "Dart",
          "GetX",
          "REST API",
          "Android",
          "iOS",
          "Cross-platform",
          "Mobile UI/UX",
          "Git",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
