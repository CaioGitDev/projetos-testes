import en from "./locales/en.json";
import pt from "./locales/pt.json";

export type Locale = "pt" | "en";
export type Translations = typeof pt;

const locales: Record<Locale, Translations> = { en, pt };

export function useTranslations(locale: Locale): Translations {
  return locales[locale] ?? locales.pt;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return "pt";
}

export const defaultLocale: Locale = "pt";
