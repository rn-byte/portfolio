import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "bandobasta",
    title: "Bandobasta (Event Booking App)",
    period: {
      start: "02.2025",
    },
    link: "https://play.google.com/store/apps/details?id=com.bandobasta.bandobasta",
    skills: [
      "Flutter",
      "Dart",
      "GetX",
      "REST API",
      "Android",
      "iOS",
      "Google Play",
      "App Store",
    ],
    description: `Multi-service event and celebration booking mobile platform available on iOS and Android.
- 📱 **Multi-Service Booking**: Venue and banquet hall reservations with integrated service providers (photographers, bridal makeup artists, DJs, mehendi artists).
- ⚡ **Dynamic Availability**: Real-time slot availability checking, dynamic pricing, and scheduling.
- 🎨 **Clean & Intuitive UI**: Modern mobile UI designed with reactive GetX state management.
- 🌐 [View on Google Play](https://play.google.com/store/apps/details?id=com.bandobasta.bandobasta) · [View on Apple App Store](https://apps.apple.com/us/app/bandobasta/id6751802666?platform=iphone)`,
    isExpanded: true,
  },
  {
    id: "tiiktiik",
    title: "TiikTiik dot com (Employee Management)",
    period: {
      start: "2025",
    },
    link: "https://github.com/rn-byte",
    skills: [
      "Flutter",
      "Dart",
      "Provider",
      "REST API",
      "Mobile UX",
      "Attendance System",
    ],
    description: `Comprehensive enterprise employee management mobile application ready for release.
- 🕒 **Attendance & Leave Management**: Daily check-in/check-out, shift scheduling, and leave request workflows.
- 🏗️ **Clean Modular Architecture**: Built with Provider state management ensuring testability and separation of concerns.
- 🔐 **Secure Operations**: Token-based authentication, role-based administrative dashboards, and instant alerts.`,
    isExpanded: true,
  },
  {
    id: "canteen-meal",
    title: "Canteen Automation System",
    period: {
      start: "2023",
      end: "2023",
    },
    link: "https://github.com/rn-byte/Canteen_Meal_Clinet_App",
    skills: [
      "Java",
      "Android SDK",
      "Firebase",
      "Khalti Payment",
      "College Project",
    ],
    description: `Mobile canteen ordering and payment system with real-time digital kitchen integration.
- 💳 **Digital Payments**: Integrated Khalti digital wallet for cashless campus meal transactions.
- 🔔 **Instant Notifications**: Real-time push notifications via Firebase Cloud Messaging for order status.
- 📊 **Source Code**: [github.com/rn-byte/Canteen_Meal_Clinet_App](https://github.com/rn-byte/Canteen_Meal_Clinet_App)`,
  },
  {
    id: "rental-services",
    title: "Rental Services System",
    period: {
      start: "2022",
      end: "2023",
    },
    link: "https://github.com/LamichhaneBibek/RentalServices",
    skills: ["Python", "Flask", "MySQL", "Socket.io", "Real-time Chat"],
    description: `Web-based vehicle and room rental service featuring an intuitive dashboard and real-time chat powered by Socket.io.
- 💬 **Live Chat**: Real-time customer-to-vendor communication for instant inquiry handling.
- 🛡️ **Admin Portal**: Listing verification, booking management, and user reporting.
- 📊 **Source Code**: [github.com/LamichhaneBibek/RentalServices](https://github.com/LamichhaneBibek/RentalServices)`,
  },
  {
    id: "flutter-suite",
    title: "Personal Flutter Applications Suite",
    period: {
      start: "2023",
    },
    link: "https://github.com/rn-byte",
    skills: [
      "Flutter",
      "Bloc",
      "GetX",
      "Provider",
      "REST API",
      "Open Source",
    ],
    description: `A portfolio of specialized open-source Flutter applications:
- ☀️ **Weather App**: Real-time weather forecasting engineered with BLoC state management and location services.
- 📋 **Task Management To-Do**: Offline-first task organizer with local persistence.
- 🦠 **COVID-19 Tracker**: Live data tracker consuming REST APIs with interactive visualization.
- 🛍️ **Pr Store (E-Commerce App)**: Multi-category store integrating payment methods and real-time inventory updates.`,
  },
];
