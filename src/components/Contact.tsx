"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
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

          {/* Right - Form */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
            <form className="space-y-5" aria-label="Contact form for China sourcing services">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-foreground mb-2">
                  What are you interested in?
                </label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-muted focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200">
                  <option>Product Sourcing</option>
                  <option>Brand Creation</option>
                  <option>Import & Export</option>
                  <option>Hong Kong Company Formation</option>
                  <option>Trademark Registration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary btn-primary-royal w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
