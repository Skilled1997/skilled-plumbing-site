import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { serviceCategories } from "@/app/our-services/servicesData";

export default function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/our-services" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Skilled Plumbing Services" className="h-10 w-auto object-contain" />
            <span className="text-sm font-bold tracking-tight text-white uppercase">
              Skilled Plumbing Services
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Old school service, built on trust, honesty and integrity. Licensed plumber and gas
            fitter based in Fremantle, serving all of Perth.
          </p>
          <a
            href="https://www.instagram.com/skilledplumbingservices"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Skilled Plumbing Services on Instagram"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <SiInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">
            Services
          </h3>
          <ul className="space-y-3">
            {serviceCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">
            Company
          </h3>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">
            Get In Touch
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:0448803947"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                0448 803 947
              </a>
            </li>
            <li>
              <a
                href="mailto:ren@skilledplumbingservices.com"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                ren@skilledplumbingservices.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              Fremantle &amp; southern suburbs, Perth WA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {year} Skilled Plumbing Services. All rights reserved.</p>
          <p>Licence PL11063 | GF20308 &nbsp;&middot;&nbsp; ABN 30 700 290 633</p>
        </div>
      </div>
    </footer>
  );
}
