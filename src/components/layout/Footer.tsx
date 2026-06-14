"use client";
import { dictionary } from "@/lib/dictionary";
import { useLanguage } from "@/context/LanguageContext";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <footer className="bg-background-light border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div className="max-md:text-center">
            <h3 className="font-serif text-2xl text-slate-900 mb-4">
              Sofía Capuano
            </h3>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-600 md:mx-0">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="max-md:text-center">
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t.footer.links.about}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  {t.footer.links.portfolio}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">
                  {t.footer.links.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

        {/* Contact */}
        <div className="max-md:text-center">
          <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
            {t.footer.contact}
          </h4>

          <ul className="space-y-4 text-sm text-slate-700">

            <li>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start"
              >
                <FiMail className="h-4 w-4 shrink-0" />
                <span>{t.footer.email}</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/34611328596"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start"
              >
                <FiPhone className="h-4 w-4 shrink-0" />
                <span>+34 611 328596</span>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/sofiacapuanoph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors md:justify-start"
              >
                <FaInstagram className="h-4 w-4 shrink-0" />
                <span>@sofiacapuanoph</span>
              </a>
            </li>

          </ul>
        </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} . Sofía Capuano. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}