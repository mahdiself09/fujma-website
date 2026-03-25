import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Fujma Limited",
  description:
    "Read the Fujma Limited Disclaimer governing your access to and use of our website and general published information.",
};

const sections = [
  { id: "general-notice", label: "1. General Notice" },
  { id: "nature-of-services", label: "2. Nature of Services" },
  { id: "no-legal-advice", label: "3. No Professional or Legal Advice" },
  { id: "no-guarantee", label: "4. No Guarantee of Results" },
  { id: "supplier-liability", label: "5. Supplier Independence & Product Liability" },
  { id: "accuracy", label: "6. Website Accuracy & Availability" },
  { id: "external-links", label: "7. External Links" },
  { id: "intellectual-property", label: "8. Intellectual Property" },
  { id: "limitation-liability", label: "9. Limitation of Liability" },
  { id: "consistency", label: "10. Consistency with Terms of Service" },
  { id: "governing-law", label: "11. Governing Law" },
  { id: "updates", label: "12. Updates" },
  { id: "contact", label: "13. Contact" },
];

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-20 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-semibold text-royal uppercase tracking-widest mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Disclaimer
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Fujma Limited — Hong Kong
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted">
              <span><strong className="text-foreground">Version:</strong> 3.0 — Final</span>
              <span><strong className="text-foreground">Effective:</strong> 20 March 2026</span>
              <span><strong className="text-foreground">Governing Law:</strong> Hong Kong SAR</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Quick nav */}
          <nav className="mb-14 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Contents</p>
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-royal hover:underline leading-relaxed">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Intro callout */}
          <div className="mb-12 p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl text-[15px] text-gray-700 leading-relaxed italic">
            This Disclaimer governs your access to and use of the Fujma Limited website and any general information published by Fujma Limited. It is to be read alongside the Terms of Service and Privacy Policy, which together form Fujma Limited's complete legal framework. In the event of any conflict between this Disclaimer and the Terms of Service, the Terms of Service shall prevail.
          </div>

          <div className="space-y-14 text-[15px] leading-relaxed text-gray-700">

            {/* 1 */}
            <section id="general-notice">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. General Notice</h2>
              <p className="mb-4">The information published on the Fujma Limited website (the "Site") and in any associated marketing or general communications is provided for informational and commercial presentation purposes only. Whilst Fujma Limited exercises reasonable care in preparing and maintaining Site content, we make no representation or warranty of any kind — whether express, implied, or statutory — as to the accuracy, completeness, currency, reliability, suitability, or availability of any information contained herein.</p>
              <p>Any reliance placed on information published on this Site is at your sole risk. Fujma Limited expressly disclaims all liability for any loss or damage — direct, indirect, or consequential — arising from such reliance.</p>
            </section>

            {/* 2 */}
            <section id="nature-of-services">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Nature of Fujma Limited's Services</h2>
              <p>For the avoidance of doubt and in alignment with the Terms of Service, all services provided by Fujma Limited are intangible, professional, consulting, and operational in nature. Fujma Limited does not sell physical goods, manufacture products, or operate as a retailer or reseller. Fujma Limited acts exclusively as an independent intermediary and service provider. Nothing on this Site implies otherwise.</p>
            </section>

            {/* 3 */}
            <section id="no-legal-advice">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. No Professional or Legal Advice</h2>
              <p className="mb-4">Nothing on this Site, in our marketing materials, or in any general communication from Fujma Limited constitutes professional legal, financial, tax, accounting, customs, regulatory, or investment advice. In particular:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Information relating to Hong Kong company formation is general in nature and does not constitute legal advice. You should consult a qualified Hong Kong solicitor or licensed company secretary before making any decisions.</li>
                <li>Information relating to trademark registration does not constitute a legal opinion on registrability, scope, enforceability, or freedom to operate in any jurisdiction.</li>
                <li>Information relating to import and export procedures, tariff classifications, and customs duties is general guidance only and is subject to change without notice. You should consult a licensed customs broker or trade compliance specialist.</li>
                <li>Information relating to product sourcing, manufacturing standards, or supplier capabilities does not constitute a guarantee of suitability, quality, regulatory compliance, or commercial viability.</li>
              </ul>
              <p>Fujma Limited is not a law firm, financial institution, or regulated professional advisor. No advisory, fiduciary, or professional relationship is created by the publication of general information on this Site or by any preliminary communication prior to a formal engagement.</p>
            </section>

            {/* 4 */}
            <section id="no-guarantee">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. No Guarantee of Results</h2>
              <div className="p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl italic mb-4">
                Fujma Limited does not guarantee any specific business outcome, commercial result, return on investment, or financial performance. All examples, case studies, and illustrations of past work published on this Site are provided for informational purposes only and are not representations of future performance.
              </div>
              <p>Each client engagement is unique. Outcomes — including sourcing timelines, manufacturing quality, trademark registration approvals, company formation processing, and customs clearance — are subject to factors outside Fujma Limited's control. All service timelines are estimates only, as set out in the Terms of Service.</p>
            </section>

            {/* 5 */}
            <section id="supplier-liability">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Supplier Independence and Product Liability</h2>
              <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl font-semibold mb-4">
                Fujma Limited does not manufacture, produce, inspect, test, certify, or exercise operational control over any third-party supplier or manufacturer. All risks relating to product quality, safety, fitness for purpose, regulatory compliance, and liability to end consumers are borne entirely by the Client, as further set out in the Terms of Service.
              </div>
              <p className="mb-4">Fujma Limited accepts no responsibility or liability arising from:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>The quality, safety, or regulatory compliance of products manufactured or supplied by third parties</li>
                <li>Delays, damage, or loss caused by freight carriers, customs authorities, or logistics intermediaries</li>
                <li>The accuracy of product certifications, compliance declarations, or test results provided by suppliers</li>
                <li>Changes to import/export regulations, tariff classifications, or trade restrictions in any jurisdiction</li>
                <li>Any product liability claim brought by a consumer, regulatory authority, or third party in connection with goods sourced through Fujma Limited</li>
              </ul>
              <p>The Client is solely and irrevocably responsible for conducting independent product due diligence, arranging third-party quality inspections, verifying all applicable regulatory certifications, and ensuring compliance with the laws of each jurisdiction into which goods are imported or in which they are sold.</p>
            </section>

            {/* 6 */}
            <section id="accuracy">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Website Accuracy and Availability</h2>
              <p>The content published on this Site may be amended, updated, or removed at any time without prior notice. Fujma Limited does not warrant that this Site will be continuously available, free of errors, or free from viruses, malware, or other harmful components. We reserve the right to modify, restrict access to, suspend, or discontinue any portion of the Site at any time without liability.</p>
            </section>

            {/* 7 */}
            <section id="external-links">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. External Links</h2>
              <p>This Site may contain hyperlinks to third-party websites or platforms. Such links are provided solely for convenience and do not constitute an endorsement, recommendation, or approval of the content, products, services, or privacy practices of any linked site. Fujma Limited accepts no responsibility for the content, accuracy, legality, or data handling of any third-party website. Access to external links is entirely at your own risk.</p>
            </section>

            {/* 8 */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              <p>All content on this Site — including text, graphics, logos, service descriptions, photographs, design elements, and the overall selection and arrangement thereof — constitutes the intellectual property of Fujma Limited or its duly licensed content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws. No part of this Site may be reproduced, distributed, transmitted, modified, or used for any commercial purpose without the prior written consent of Fujma Limited.</p>
            </section>

            {/* 9 */}
            <section id="limitation-liability">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by the laws of the Hong Kong Special Administrative Region, Fujma Limited, its directors, officers, shareholders, employees, contractors, agents, and affiliates shall not be liable for any loss, damage, cost, or expense of any kind — whether direct, indirect, incidental, consequential, special, or punitive — arising from or in connection with:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your use of, or inability to use, this Site or any content published on it</li>
                <li>Any inaccuracy, error, or omission in the information provided on this Site</li>
                <li>Any reliance placed on general information, estimates, or timelines published on this Site</li>
                <li>Any interruption, suspension, or termination of access to this Site</li>
                <li>Any unauthorised access to or alteration of your data or transmissions</li>
              </ul>
              <p>This limitation applies regardless of the legal theory under which any claim is brought — including contract, tort, strict liability, or otherwise — and regardless of whether Fujma Limited has been advised of the possibility of such loss or damage.</p>
            </section>

            {/* 10 */}
            <section id="consistency">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Consistency with Terms of Service</h2>
              <p>This Disclaimer is to be read consistently with and in conjunction with Fujma Limited's Terms of Service and Privacy Policy. Where this Disclaimer addresses matters also covered in the Terms of Service — including supplier liability, timeline estimates, service nature, and limitation of liability — the relevant provisions of the Terms of Service shall apply in full to all client engagements and shall prevail over this Disclaimer to the extent of any inconsistency.</p>
            </section>

            {/* 11 */}
            <section id="governing-law">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
              <p>This Disclaimer is governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any dispute arising in connection with this Disclaimer shall be subject to the exclusive jurisdiction of the courts of Hong Kong.</p>
            </section>

            {/* 12 */}
            <section id="updates">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Updates</h2>
              <p>Fujma Limited may revise this Disclaimer at any time by publishing an updated version on the Site. The version number and effective date are indicated at the top of this document. Continued use of this Site following any revision constitutes acceptance of the updated Disclaimer.</p>
            </section>

            {/* 13 */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact</h2>
              <p className="mb-4">For enquiries relating to this Disclaimer, please contact:</p>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="font-bold text-foreground mb-1">Fujma Limited</p>
                <p>Rm 1202, Flat A, 12/F, Efficiency House</p>
                <p>35 Tai Yau Street, San Po Kong, Hong Kong</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:contact@fujma.com" className="text-royal hover:underline">
                    contact@fujma.com
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm text-muted italic">
                © 2026 Fujma Limited. All rights reserved. Registered in Hong Kong. Version 3.0 — Final Production Release.
              </p>
            </section>

          </div>

          {/* Back to top */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <a href="#" className="text-sm font-semibold text-royal hover:underline">
              ↑ Back to top
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
