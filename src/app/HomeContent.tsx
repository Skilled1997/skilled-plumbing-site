"use client";

import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import { CheckCircle, ArrowRight, Wrench, Droplet, Flame, HomeIcon, Construction, Settings, Star } from 'lucide-react';
import { photos } from "@/data/photos";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useRef, useEffect } from "react";


export default function HomePage() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dppw8lfxp";

  // Helper to grab a specific photo object by its src ID from your photos.ts
  const getPhoto = (id: string) => photos.find(p => p.src === id) || photos[0];

  // Floating CTA: show after 7s, hide when footer is visible
  const [ctaShown, setCtaShown] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setCtaShown(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Home Renovations & Extensions",
      desc: "Complete plumbing overhauls for your new space and kitchen/bathroom extensions.",
      imageId: "IMG_1969_mxa5nx", // Tiled bathroom/renovation vibe
      icon: <HomeIcon className="w-6 h-6" />,
      href: "/services/home-renovations"
    },
    {
      title: "Maintenance Plumbing & Repairs",
      desc: "Quick, reliable fixes to save water and prevent property damage.",
      imageId: "leaking_tap_hi7bb5",
      icon: <Droplet className="w-6 h-6" />,
      href: "/services/maintenance-repairs"
    },
    {
      title: "Gas Fitting",
      desc: "Safe, certified gas installations and leak detection for your peace of mind.",
      imageId: "E52DB188-0675-41F7-A00D-5CBE2EA8C838_1_105_c_ow3kfw",
      imageAlt: "Newly installed gas cooktop with rangehood",
      icon: <Flame className="w-6 h-6" />,
      href: "/services/gas-fitting"
    },
    {
      title: "Hot Water Systems",
      desc: "Repairs, replacements, and upgrades to ensure you're never without hot water.",
      imageId: "6F8045C7-B260-492E-8E8E-3CF72CF4C0A0_1_105_c_bbw5dd",
      icon: <Settings className="w-6 h-6" />,
      href: "/services/hot-water-repairs"
    },
    {
      title: "Blocked Drains & CCTV Inspections",
      desc: "Specialised equipment and CCTV cameras to clear blockages and see exactly what's going on underground.",
      imageId: "Drain_Camera_u6ns9r",
      imageAlt: "Skilled Plumbing Services technician setting up a CCTV drain camera inspection",
      icon: <Wrench className="w-6 h-6" />,
      href: "/services/blocked-drains"
    },
    {
      title: "Commercial Plumbing",
      desc: "Ground-up construction plumbing and commercial solutions for Perth builders and businesses.",
      imageId: "commerical_gzrzhn",
      icon: <Construction className="w-6 h-6" />,
      href: "/services/commercial-plumbing"
    }
  ];

  const googleReviewUrl = "https://www.google.com/maps/place/?q=place_id:ChIJ6fbDOctNuggRkqNn7dK-FO4";

  const testimonials = [
    {
      name: "Benjamin Handcock",
      timeAgo: "2 months ago",
      text: "Skilled Plumbing Services was able to help me with a damaged water pipe issue I had. Super professional and efficient at fixing this for us. Would highly recommend to anyone in need of his services!",
    },
    {
      name: "Tegan McNab",
      timeAgo: "5 days ago",
      text: "Ren came out to solve a partially blocked pipe last week and I would highly recommend his service, and will be calling him when we need a plumber again. It was semi-urgent and he was able to fit us in that day, and solved the problem quickly. His communication was great the entire time and I felt that his rates were very reasonable.",
    },
    {
      name: "Priscila Petrelli",
      timeAgo: "2 days ago",
      text: "We couldn't be happier with the service! He replaced our toilet and did an amazing job. Very professional, punctual, and the quality of the work was excellent. Everything was left clean and working perfectly. Highly recommend!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 text-white overflow-hidden">
        {/* TOP SPACER: Clears the fixed header */}
        <div className="absolute top-0 left-0 right-0 h-24 z-30" />

        <div className="absolute inset-0 z-0">
          <CldImage
            config={{ cloud: { cloudName: cloudName } }}
            src="IMG_0746_3_zk87u4"
            fill
            priority
            alt="Skilled Plumbing Services Hero"
            sizes="100vw"
            className="object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent z-10" />
          {/* Mobile-specific bottom fade to ensure text contrast on small screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden z-10" />
        </div>

        {/* pt-40 on mobile ensures the text starts well below the 24-unit header */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-20 lg:pt-32">
          <div className="max-w-3xl">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
                <path fill="#4285F4" d="M23.52 12.273c0-.851-.076-1.669-.218-2.454H12v4.64h6.458c-.282 1.5-1.128 2.77-2.398 3.62v3.01h3.878c2.27-2.09 3.582-5.166 3.582-8.816z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.956-1.075 7.94-2.91l-3.878-3.01c-1.075.72-2.45 1.147-4.062 1.147-3.126 0-5.77-2.11-6.72-4.946H1.28v3.106C3.253 21.31 7.31 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.281A7.2 7.2 0 0 1 4.909 12c0-.792.136-1.56.371-2.281V6.613H1.28A11.996 11.996 0 0 0 0 12c0 1.937.464 3.77 1.28 5.387l3.999-3.106z"/>
                <path fill="#EA4335" d="M12 4.773c1.76 0 3.343.605 4.588 1.794l3.441-3.44C17.951 1.19 15.236 0 12 0 7.31 0 3.253 2.69 1.28 6.613l3.999 3.106C6.23 6.884 8.874 4.773 12 4.773z"/>
              </svg>
            </a>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Old School <span className="text-blue-400">Service.</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light text-slate-200 mb-10 leading-relaxed max-w-xl">
              Built on <span className="font-semibold text-white">Trust, Honesty, and Integrity.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/about" className="inline-flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition duration-300 active:scale-95">
                About Us
              </Link>
              <Link href="/our-services" className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-xl backdrop-blur-md transition duration-300 border border-white/20 active:scale-95">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs sm:text-sm font-medium text-slate-00 uppercase tracking-wider">
<span className="flex items-center gap-2">
  <CheckCircle className="w-4 h-4 shrink-0 text-blue-400"/>
  Free Quotes & Site Visits
</span>

<span className="flex items-center gap-2">
  <CheckCircle className="w-4 h-4 shrink-0 text-blue-400"/>
  Transparent Processes From Start to Finish
</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">What we do</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">Professional Plumbing & Gas Solutions</h3>
          </div>
          <Link href="/our-services" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const photo = getPhoto(service.imageId);
            return (
              <div key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <div className="h-80 relative overflow-hidden bg-slate-100">
                  <CldImage
                    config={{ cloud: { cloudName: cloudName } }}
                    src={service.imageId}
                    width={800}
                    height={640}
                    crop="fill"
                    gravity="auto"
                    alt={service.imageAlt || service.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0"
                    onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 z-20 text-white p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link href={service.href} className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-only Link */}
        <div className="mt-12 md:hidden text-center">
          <Link href="/our-services" className="inline-flex items-center gap-2 text-blue-600 font-bold">
            See all our services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Customer Reviews</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight mb-6">What Our Customers Say</h3>
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4">
              <span className="text-2xl font-extrabold text-slate-900">5.0</span>
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-sm text-slate-500 font-medium">from 35 Google reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{t.name}</span>
                  <span className="text-xs text-slate-400">{t.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-200 active:scale-[0.98]"
            >
              Read All Reviews on Google <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating CTA — hidden when footer CTA is visible */}
      <AnimatePresence>
        {ctaShown && !footerVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 100, x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-6 md:bottom-8 left-1/2 z-40 w-[60%] md:w-auto max-w-sm"
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 3 }}>
              <a href="/quote" className="flex w-full justify-center items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full shadow-2xl font-medium tracking-wide transition-all duration-300 hover:bg-slate-800 active:scale-95 backdrop-blur-md">
                <span>Get a Free Quote</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER CALL TO ACTION */}
      <section ref={footerRef} className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a site visit or a quote?</h2>
          <p className="text-slate-400 mb-10 text-lg">We provide upfront, transparent advice and obligation-free quoting for all plumbing and gas work.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="bg-white text-slate-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-xl transition duration-300">
              Request Your Quote
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
