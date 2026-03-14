"use client";

import { createContext, useContext, useState } from "react";
import type { Locale } from "./translations";
import { translations } from "./translations";

type Translations = (typeof translations)[Locale];

type LangContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LangContext = createContext<LangContextType | null>(null);

function getInitialLocale(defaultLocale: Locale): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem("locale");
  if (stored === "fi" || stored === "en") return stored;
  const lang = navigator.language || "";
  return lang.startsWith("fi") ? "fi" : "en";
}

export function LangProvider({
  defaultLocale,
  children,
}: {
  defaultLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(() =>
    getInitialLocale(defaultLocale),
  );

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LangContext.Provider
      value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
