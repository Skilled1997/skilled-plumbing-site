"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { ArrowRight, ShieldCheck, MapPin, Handshake, Wrench } from "lucide-react";

export default function AboutContent() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dppw8lfxp";

  const values = [
    {
      title: "$20M Public Liability",
      desc: "Fully licensed plumber and gas fitter (PL11063 | GF20308) with $20 million public liability cover.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Fremantle Local",
      desc: "Based in Fremantle, servicing the southern suburbs and all of Perth, WA.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Honest, Upfront Pricing",
      desc: "Free quotes and site visits, with transparent processes from start to finish.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: "8+ Years Experience",
      desc: "Hands-on plumbing and gas fitting experience on jobs of every size.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* HEADER SPACER: Matches layout logic to push content below the fixed header */}
      <div className="h-20 w-full" />

      {/* HERO & STORY SECTION */}
      <section className="relative bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Text Column */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              About Us
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              A licensed plumber and gas fitter based in Fremantle, providing honest and reliable
              service across Perth.
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Skilled Plumbing Services is led by Ren, a licensed plumber and gas fitter with
                over eight years of trade experience across Perth and the southern suburbs. Every
                job, from a leaking tap to a full commercial fit-out, is completed personally by
                Ren, ensuring consistent quality and direct accountability from quote to
                completion.
              </p>
              <p>
                Prior to entering the plumbing trade, Ren worked as a disability support worker,
                an experience that instilled a strong focus on communication and genuine care for
                the people he works with. This approach continues to define Skilled Plumbing
                Services today, with honest advice, transparent pricing and quality workmanship
                delivered on every job, regardless of scale.
              </p>
              <p>
                Skilled Plumbing Services is fully licensed and insured (PL11063 | GF20308), with
                $20 million in public liability cover, and proudly serves homeowners, renters,
                real estate agents, strata companies and commercial clients across Fremantle, the
                southern suburbs and greater Perth.
              </p>
              <p className="font-semibold text-slate-900">— Ren, Licensed Plumber &amp; Founder</p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative h-64 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/60 lg:sticky lg:top-24">
            <CldImage
              config={{ cloud: { cloudName: cloudName } }}
              src="IMG_ojc9yb"
              fill
              priority
              alt="Ren from Skilled Plumbing Services"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-0 transition-opacity duration-700 ease-in-out"
              onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
            />
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-10 text-center">
          Why Choose Skilled Plumbing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOWER CTA BANNER */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Need a plumber you can trust?</h3>
            <p className="text-slate-600 text-sm max-w-md">
              Get a free, no-obligation quote for your plumbing or gas fitting job.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition duration-200 active:scale-[0.98]"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
