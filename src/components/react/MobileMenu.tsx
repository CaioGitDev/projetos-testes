import { useState } from "react";

interface Props {
  links: Array<{ href: string; label: string }>;
  locale: string;
}

export default function MobileMenu({ links, locale }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        class="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        aria-label="Toggle menu"
      >
        <span
          class={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          class={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          class={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div class="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden">
          <ul class="py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  class="block px-6 py-3 text-dark hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="px-6 py-4 border-t border-gray-100">
            <a
              href={locale === "pt" ? "/en" : "/pt"}
              class="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              {locale === "pt" ? "English" : "Português"}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
