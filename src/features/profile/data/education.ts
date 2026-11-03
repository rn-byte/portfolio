import type { Experience } from "../types/experiences";

export const EDUCATION: Experience[] = [
  {
    id: "ncit",
    companyName: "Nepal College of Information Technology (NCIT)",
    positions: [
      {
        id: "ncit-be-computer",
        title: "BE Computer Engineering",
        employmentPeriod: {
          start: "2017",
          end: "2023",
        },
        employmentLocation: "Balkumari, Lalitpur, Nepal",
        icon: "education",
        description: `- Completed Bachelor's Degree in Computer Engineering.
- Coursework: Data Structures & Algorithms, Object-Oriented Software Development, Database Management Systems, Operating Systems, Mobile Computing.
- Final Capstone: Real-time Canteen Automation and Mobile Ordering System.`,
        skills: [
          "C/C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "DBMS",
          "Software Engineering",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "unique-academy",
    companyName: "Unique Academy",
    positions: [
      {
        id: "unique-plus-two",
        title: "+2 Science (Higher Secondary)",
        employmentPeriod: {
          start: "2014",
          end: "2015",
        },
        employmentLocation: "Kumaripati, Lalitpur, Nepal",
        icon: "education",
        description: `- Focus on Mathematics and Physical Sciences.`,
        skills: ["Mathematics", "Physics", "Computer Science"],
      },
    ],
  },
  {
    id: "nehsbs",
    companyName: "New English Higher Secondary Boarding School",
    positions: [
      {
        id: "nehsbs-slc",
        title: "School Leaving Certificate (SLC)",
        employmentPeriod: {
          start: "2014",
          end: "2014",
        },
        employmentLocation: "Murlichowk, Janakpur, Nepal",
        icon: "education",
        description: `- Secondary school graduation with distinction.`,
      },
    ],
  },
];
