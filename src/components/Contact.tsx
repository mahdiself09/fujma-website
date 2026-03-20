import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="md:sticky md:top-24 self-start">
            <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
              Contact Us
            </span>
            <h2 id="contact-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
              Let&apos;s Build Your Brand Together
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              Ready to start? Fill out the form and our team will get back to
              you within 24 hours.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-royal-light rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} strokeWidth={1.8} className="text-royal" />
                </div>
                <div>
                  <div className="text-[13px] text-muted font-medium">Email</div>
                  <div className="font-semibold text-foreground text-[15px]">
                    contact@fujma.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-royal-light rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} strokeWidth={1.8} className="text-royal" />
                </div>
                <div>
                  <div className="text-[13px] text-muted font-medium">Phone</div>
                  <div className="font-semibold text-foreground text-[15px]">
                    +852 5926 9273
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-royal-light rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.8} className="text-royal" />
                </div>
                <div>
                  <div className="text-[13px] text-muted font-medium">Location</div>
                  <div className="font-semibold text-foreground text-[15px]">
                    RM 1202, Flat A, 12/F, Efficiency House
                    <br />
                    35 Tai Yau Street, San Po Kong
                    <br />
                    Hong Kong
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Reusable form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
