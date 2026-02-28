import { dictionary } from "@/lib/dictionary";

export default function Footer() {
  const t = dictionary.es;

  return (
    <footer className="bg-background-light border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">
              {t.footer.brand}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
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
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>{t.footer.email}</li>
              <li>{t.footer.phone}</li>
              <li>
                <a
                  href={t.footer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
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
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
          </p>
          <p>{t.footer.signature}</p>
        </div>

      </div>
    </footer>
  );
}