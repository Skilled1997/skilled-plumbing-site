import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Ren, the licensed plumber behind Skilled Plumbing Services. Based in Fremantle with over eight years in the trade, offering honest, old school service across Perth.",
  openGraph: {
    title: "About Us | Skilled Plumbing Services",
    description:
      "Meet Ren, the licensed plumber behind Skilled Plumbing Services. Based in Fremantle with over eight years in the trade, offering honest, old school service across Perth.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutContent />;
}
