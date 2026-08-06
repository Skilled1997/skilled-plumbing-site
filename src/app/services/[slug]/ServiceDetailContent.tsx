"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { CheckCircle2, Home, Wrench, Flame, ArrowRight } from "lucide-react";
import { ServiceCategory, serviceCategories } from "../../our-services/servicesData";

const ICONS = { home: Home, wrench: Wrench, flame: Flame };

export default function ServiceDetailContent({ category }: { category: ServiceCategory }) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dppw8lfxp";
  const Icon = ICONS[category.iconName];
  const relatedServices = serviceCategories.filter((c) => c.slug !== category.slug);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* HEADER */}
      <section className="relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-100">
          <CldImage
            config={{ cloud: { cloudName: cloudName } }}
            src={category.imageId}
            fill
            priority
            sizes="100vw"
            alt={category.title}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-slate-300 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/our-services" className="hover:text-white">Our Services</Link>
            <span>/</span>
            <span className="text-white">{category.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{category.title}</h1>
          </div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            {category.desc}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Main Column */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
              <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6">Specialities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {category.services.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why choose Skilled Plumbing Services</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">{category.whyUs}</p>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-200 active:scale-[0.98]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Sidebar: Other Services */}
          <aside>
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6">Other Services</h2>
            <ul className="space-y-4">
              {relatedServices.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="flex items-center justify-between text-slate-700 font-semibold hover:text-blue-600 transition-colors bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                  >
                    {rel.title}
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/our-services" className="block mt-6 text-blue-600 font-bold hover:text-blue-800">
              View all services →
            </Link>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't see exactly what you need?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Plumbing issues rarely fit neatly into a box. If you have a custom project or an unusual problem, reach out. We can handle it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-xl shadow-xl transition duration-300 active:scale-95">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
