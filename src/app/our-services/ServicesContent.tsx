"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { CheckCircle2, Home, Wrench, Flame, Camera, Construction, ArrowRight } from "lucide-react";
import { serviceCategories } from "./servicesData";

const ICONS = { home: Home, wrench: Wrench, flame: Flame, camera: Camera, construction: Construction };

export default function ServicesContent() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dppw8lfxp";

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Header Background */}
        <div className="absolute inset-0 z-0 opacity-100">
          <CldImage
            config={{ cloud: { cloudName: cloudName } }}
            src="IMG_0746_3_zk87u4" // A good wide installation shot
            fill
            priority
            sizes="100vw" // ADDED: Tells browser this is a full-width image
            alt="Skilled Plumbing Services"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Comprehensive <span className="text-blue-500">Plumbing Solutions.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            From dripping taps to complete commercial fit-outs. We bring old-school service and transparent pricing to every job, big or small.
          </p>
        </div>
      </section>

      {/* SERVICES LIST (Alternating Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-32">
          {serviceCategories.map((category, index) => {
            // Determine if the image should be on the left or right
            const isEven = index % 2 === 0;
            const Icon = ICONS[category.iconName];

            return (
              <div
                key={category.id}
                id={category.id}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  {/* Decorative background shape */}
                  <div className={`absolute top-4 bottom-4 w-full bg-blue-100 rounded-3xl -z-10 ${isEven ? 'left-4' : 'right-4'}`} />

                  <Link href={`/services/${category.slug}`} className="block relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white">
                    <CldImage
                      config={{ cloud: { cloudName: cloudName } }}
                      src={category.imageId}
                      fill
                      alt={category.imageAlt || category.title}
                      sizes="(max-width: 1024px) 100vw, 50vw" // This was already perfect!
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                  </Link>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <Link href={`/services/${category.slug}`} className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 hover:text-blue-600 transition-colors">
                      {category.title}
                    </h2>
                  </Link>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    {category.desc}
                  </p>

                  {/* Specific Services Grid */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                    <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6">Specialities</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {category.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick CTA per section */}
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link href={`/services/${category.slug}`} className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group">
                      Full details on {category.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/quote" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                      Need help with this? Get a quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
