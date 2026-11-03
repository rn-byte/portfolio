import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/IBMPlexMono-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/IBMPlexMono-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mono",
});
