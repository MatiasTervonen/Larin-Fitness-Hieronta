"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LangContext";

const hours = [
  "08:00 - 18:00",
  "08:00 - 18:00",
  "08:00 - 18:00",
  "08:00 - 18:00",
  "08:00 - 18:00",
  null,
  null,
];

export default function Home() {
  const { locale, setLocale, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm sm:text-lg font-semibold text-white truncate">
            Larin Fitness ja Hieronta
          </span>

          <div className="ml-auto hidden md:flex items-center gap-6">
            <a
              href="#palvelut"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#yhteystiedot"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
            <button
              onClick={() => setLocale(locale === "fi" ? "en" : "fi")}
              className="flex items-center gap-2 hover:bg-white/20 transition-colors rounded-full px-3 py-1.5 w-20 justify-center"
              aria-label={locale === "fi" ? "Switch to English" : "Vaihda suomeksi"}
            >
              {locale === "fi" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shrink-0">
                    <clipPath id="gb"><rect width="60" height="30" /></clipPath>
                    <g clipPath="url(#gb)">
                      <rect width="60" height="30" fill="#012169" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#gb)" />
                      <path d="M30,0V30M0,15H60" stroke="#fff" strokeWidth="10" />
                      <path d="M30,0V30M0,15H60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-white">EN</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1100" className="w-6 h-4 rounded-sm shrink-0">
                    <rect width="1800" height="1100" fill="#fff" />
                    <rect y="400" width="1800" height="300" fill="#003580" />
                    <rect x="500" width="300" height="1100" fill="#003580" />
                  </svg>
                  <span className="text-sm font-medium text-white">FI</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pt-4 pb-2">
            <a
              href="#palvelut"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#yhteystiedot"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
            <button
              onClick={() => {
                setLocale(locale === "fi" ? "en" : "fi");
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {locale === "fi" ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shrink-0">
                    <clipPath id="gb2"><rect width="60" height="30" /></clipPath>
                    <g clipPath="url(#gb2)">
                      <rect width="60" height="30" fill="#012169" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#gb2)" />
                      <path d="M30,0V30M0,15H60" stroke="#fff" strokeWidth="10" />
                      <path d="M30,0V30M0,15H60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                  </svg>
                  EN
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1100" className="w-6 h-4 rounded-sm shrink-0">
                    <rect width="1800" height="1100" fill="#fff" />
                    <rect y="400" width="1800" height="300" fill="#003580" />
                    <rect x="500" width="300" height="1100" fill="#003580" />
                  </svg>
                  FI
                </>
              )}
            </button>
          </div>
        )}
      </nav>

      <div className="relative flex min-h-screen items-center justify-center">
        <Image
          src="/hero.webp"
          alt="Larin Fitness ja Hieronta"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-6 text-center text-white drop-shadow-lg">
          <h1 className="text-3xl sm:text-5xl md:text-7xl xl:whitespace-nowrap font-bold">
            <span className="inline-block animate-slide-left">{t.hero.titleLine1}</span>{" "}
            <span className="inline-block animate-slide-right">{t.hero.titleLine2}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">{t.hero.intro}</p>
          <p className="text-lg md:text-xl leading-relaxed">
            {t.hero.location}
          </p>
          <p className="text-lg md:text-xl leading-relaxed">{t.hero.perk1}</p>
          <p className="text-lg md:text-xl leading-relaxed">{t.hero.perk2}</p>
          <p className="text-xl md:text-2xl font-semibold">{t.hero.welcome}</p>
          <p className="text-sm italic text-white/80">{t.hero.langNote}</p>
        </div>
      </div>

      <section id="palvelut" className="scroll-mt-16 px-6 py-16 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.services.title}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray-600 mb-12">
          {t.services.intro}
        </p>
        <div className="flex flex-col xl:flex-row gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4 xl:whitespace-nowrap">
              <span className="whitespace-nowrap">{t.services.s1Time}</span>{" – "}
              <span>{t.services.s1Name}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.services.s1Desc}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4 xl:whitespace-nowrap">
              <span className="whitespace-nowrap">{t.services.s2Time}</span>{" – "}
              <span>{t.services.s2Name}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.services.s2Desc}
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4 xl:whitespace-nowrap">
              <span className="whitespace-nowrap">{t.services.s3Time}</span>{" – "}
              <span>{t.services.s3Name}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.services.s3Desc}
            </p>
          </div>
        </div>
      </section>

      <section
        id="yhteystiedot"
        className="scroll-mt-16 flex flex-col md:flex-row gap-8 p-8 md:p-16 bg-gray-100"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.5!2d24.0659!3d60.2494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5a1b4e6f3b7%3A0x0!2sPellervonkatu%206%2C%2008100%20Lohja!5e0!3m2!1sfi!2sfi"
          className="w-full md:w-1/2 h-80 md:h-auto min-h-100 rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
            <p>{t.contact.address}</p>
            <p>
              <a
                href="mailto:lari.laatikainen@gmail.com"
                className="underline"
              >
                lari.laatikainen@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+358452081228" className="underline">
                +358 452081228
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">{t.contact.hours}</h2>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
              {t.contact.days.map((day, i) => (
                <div key={day} className="contents">
                  <dt
                    className={`flex items-center gap-2 ${hours[i] ? "" : "text-gray-400"}`}
                  >
                    <span
                      className={`inline-block size-2 rounded-full ${hours[i] ? "bg-green-500" : "bg-gray-400"}`}
                    />
                    {day}
                  </dt>
                  <dd className={hours[i] ? "" : "text-gray-400"}>
                    {hours[i] || t.contact.closed}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
