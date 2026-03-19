import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image src="/logo.png" alt="Fujma" width={110} height={34} className="brightness-0 invert" />
            </div>
            <p className="text-[14px] leading-relaxed mb-5 text-slate-400">
              Helping entrepreneurs build successful product brands from China.
              Based in Hong Kong, serving globally.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="#why-fujma"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Business
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/sourcing"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Sourcing
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Import Export
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Hong Kong Company
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Trademark
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  className="text-[14px] hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex items-center justify-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Fujma Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
