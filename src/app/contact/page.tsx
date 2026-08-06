import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Skilled Plumbing Services. Call, email or request a free quote for plumbing and gas fitting work across Fremantle, southern suburbs and Perth, WA.",
  openGraph: {
    title: "Contact Us | Skilled Plumbing Services",
    description:
      "Get in touch with Skilled Plumbing Services. Call, email or request a free quote for plumbing and gas fitting work across Fremantle, southern suburbs and Perth, WA.",
  },
};

export default function Page() {
  return <ContactContent />;
}
