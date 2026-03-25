import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Fujma Limited",
  description:
    "Learn how Fujma Limited collects, uses, stores, and protects your personal data in connection with our website and professional services.",
};

const sections = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "data-we-collect", label: "2. Data We Collect" },
  { id: "legal-basis", label: "3. Legal Basis" },
  { id: "client-responsibility", label: "4. Client Responsibility" },
  { id: "international-transfers", label: "5. International Transfers" },
  { id: "marketing", label: "6. Marketing & Opt-Out" },
  { id: "confidentiality", label: "7. Confidentiality" },
  { id: "data-sharing", label: "8. Data Sharing" },
  { id: "your-rights", label: "9. Your Rights (GDPR)" },
  { id: "cookies", label: "10. Cookies" },
  { id: "data-retention", label: "11. Data Retention" },
  { id: "data-security", label: "12. Data Security" },
  { id: "third-party", label: "13. Third-Party Websites" },
  { id: "children", label: "14. Children's Privacy" },
  { id: "changes", label: "15. Changes to This Policy" },
  { id: "contact", label: "16. Contact" },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Fujma Limited — Hong Kong
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted">
              <span><strong className="text-foreground">Version:</strong> 3.0 — Final</span>
              <span><strong className="text-foreground">Effective:</strong> 20 March 2026</span>
              <span><strong className="text-foreground">Contact:</strong> contact@fujma.com</span>
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
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-royal hover:underline leading-relaxed"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Intro callout */}
          <div className="mb-12 p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl text-[15px] text-gray-700 leading-relaxed italic">
            This Privacy Policy describes how Fujma Limited collects, uses, stores, and discloses personal data in connection with its website and professional services. By accessing our website, submitting an enquiry, completing a payment, or engaging our services by any means — including electronically — you confirm that you have read, understood, and agree to the practices described in this Policy. This Policy is to be read alongside our Terms of Service and Disclaimer, which together form our complete legal framework.
          </div>

          <div className="prose prose-gray max-w-none space-y-14 text-[15px] leading-relaxed text-gray-700">

            {/* 1 */}
            <section id="who-we-are">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Who We Are</h2>
              <p>
                Fujma Limited ("Fujma", "we", "us", or "our") is a company incorporated in Hong Kong that provides end-to-end brand building, product sourcing, company formation, trademark registration, and import/export logistics services. Fujma operates exclusively as an independent intermediary and professional service provider. We do not manufacture goods, take title to inventory, or operate as a reseller. The Client retains full ownership, principal status, and commercial risk in respect of their business and products at all times.
              </p>
            </section>

            {/* 2 */}
            <section id="data-we-collect">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
              <p className="mb-4">We collect and process the following categories of personal and business data in the course of operating our website and delivering our services:</p>

              <h3 className="text-lg font-semibold text-royal mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Full name, email address, and telephone number</li>
                <li>Business name, country of incorporation, and registration details</li>
                <li>Correspondence records including emails, WhatsApp messages, and contact form submissions</li>
              </ul>

              <h3 className="text-lg font-semibold text-royal mb-2">2.2 Business and Commercial Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Product ideas, specifications, and brand strategies disclosed in the course of service delivery</li>
                <li>Sourcing requirements, private label preferences, and target market information</li>
                <li>Supplier relationships, logistics instructions, and customs documentation</li>
              </ul>

              <h3 className="text-lg font-semibold text-royal mb-2">2.3 Technical and Usage Data</h3>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>IP address, browser type, device type, and operating system</li>
                <li>Pages visited, session duration, and referring URL</li>
                <li>Cookie identifiers and analytics data</li>
              </ul>

              <h3 className="text-lg font-semibold text-royal mb-2">2.4 Financial and Transactional Data</h3>
              <p>We do not process payment card data directly through our website. Transactions are currently processed via bank transfer or direct invoice. Where third-party payment processors are engaged in the future, such processors will operate under their own privacy policies and security frameworks. We retain records of transaction amounts, dates, references, and service descriptions for contractual, accounting, and legal compliance purposes.</p>
            </section>

            {/* 3 */}
            <section id="legal-basis">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Legal Basis and Purposes of Processing</h2>
              <p className="mb-4">We process personal data on the following lawful bases and for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Performance of Contract:</strong> To deliver services agreed under a client engagement, including sourcing coordination, logistics management, trademark filing, and company formation support</li>
                <li><strong>Legitimate Interests:</strong> To operate and improve our website, communicate with prospective clients, maintain business records, and manage risk — where such interests are not overridden by your data protection rights</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws in Hong Kong, Mainland China, and other relevant jurisdictions, including anti-money laundering, tax, and company law requirements</li>
                <li><strong>Consent:</strong> To send marketing communications where you have given express prior consent, subject to your right to withdraw that consent at any time (see Section 6)</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="client-responsibility">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Client Responsibility for Data Shared</h2>
              <div className="p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl italic mb-4">
                Where a Client shares personal data with Fujma Limited — including data relating to third parties such as directors, employees, or business partners — the Client warrants and confirms that: (a) such data was collected lawfully and in compliance with all applicable data protection laws, including the EU GDPR and UK GDPR where applicable; (b) the Client holds an appropriate lawful basis for sharing such data with Fujma; and (c) all required consents, notices, and authorisations have been obtained prior to disclosure. Fujma Limited accepts no liability for Client breaches of data protection law in respect of data shared with us.
              </div>
            </section>

            {/* 5 */}
            <section id="international-transfers">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. International Data Transfers</h2>
              <p className="mb-4">Fujma Limited operates across Hong Kong, Mainland China, and the countries in which our clients are based. Your data may be transferred to and processed by:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Manufacturers and suppliers located in Mainland China</li>
                <li>International freight, logistics, and customs clearance providers</li>
                <li>Professional service providers in Hong Kong, including legal and accounting advisors</li>
                <li>Third-party software and marketing platforms, including Meta and Google</li>
              </ul>
              <p>Where personal data is transferred from the European Economic Area (EEA) or the United Kingdom to countries not recognised as providing an adequate level of data protection, Fujma Limited takes reasonable steps to ensure that appropriate safeguards are in place, consistent with the requirements of the EU GDPR and UK GDPR respectively. By engaging our services, you acknowledge that such international transfers are inherent to and necessary for the performance of our contractual obligations.</p>
            </section>

            {/* 6 */}
            <section id="marketing">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Marketing Communications and Opt-Out</h2>
              <p className="mb-4">Where you have provided consent or where we hold a legitimate interest, Fujma Limited may send you service-related updates, industry insights, and promotional communications by email or other digital channels.</p>
              <p className="mb-4">You may withdraw consent or opt out of marketing communications at any time by:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Clicking the unsubscribe link included in any marketing email</li>
                <li>Sending a written opt-out request to: contact@fujma.com</li>
              </ul>
              <p>Opt-out requests will be processed within five (5) business days of receipt. Withdrawal of marketing consent does not affect the lawfulness of processing that occurred prior to withdrawal, and does not prevent Fujma Limited from sending transactional or service-operational communications that are necessary for the performance of an active engagement.</p>
            </section>

            {/* 7 */}
            <section id="confidentiality">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality of Business Information</h2>
              <div className="p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl italic mb-4">
                All client business information — including product concepts, sourcing strategies, brand assets, and supplier relationships — is treated as strictly confidential. Fujma Limited will not disclose such information to any third party except to the minimum extent necessary to deliver the agreed service or to comply with a binding legal obligation.
              </div>
              <p>All employees, contractors, and agents of Fujma Limited who access client business information are bound by enforceable confidentiality obligations. Suppliers and logistics partners who receive project-specific information do so solely for the purpose of executing the relevant instruction and are not authorised to use, retain, or disclose it for any other purpose.</p>
            </section>

            {/* 8 */}
            <section id="data-sharing">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Sharing</h2>
              <p className="mb-4">Fujma Limited does not sell, rent, trade, or otherwise transfer your personal data to third parties for commercial gain. We may share your data only in the following circumstances and to the minimum extent necessary:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With manufacturers and suppliers in Mainland China, to the extent required to fulfil sourcing and production instructions</li>
                <li>With shipping, freight, and customs clearance providers, for logistics management</li>
                <li>With regulatory and government authorities, where required by applicable law or valid legal process</li>
                <li>With marketing technology platforms, including Meta and Google, subject to their respective privacy policies</li>
                <li>With professional advisors, including solicitors and accountants, under applicable duties of confidentiality</li>
              </ul>
            </section>

            {/* 9 */}
            <section id="your-rights">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights Under GDPR and UK GDPR</h2>
              <p className="mb-4">If you are located in the European Union or the United Kingdom, you are entitled to exercise the following rights under applicable data protection legislation:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Right of Access:</strong> To request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> To request correction of inaccurate or incomplete personal data</li>
                <li><strong>Right to Erasure:</strong> To request deletion of your personal data, subject to any overriding legal retention obligations</li>
                <li><strong>Right to Restriction of Processing:</strong> To request that we limit the processing of your data in specified circumstances</li>
                <li><strong>Right to Data Portability:</strong> To receive your data in a structured, commonly used, and machine-readable format</li>
                <li><strong>Right to Object:</strong> To object to processing carried out on the basis of legitimate interests or for direct marketing purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, to withdraw that consent at any time without affecting the lawfulness of prior processing</li>
              </ul>
              <p>To exercise any of these rights, submit a written request to: <a href="mailto:contact@fujma.com" className="text-royal hover:underline">contact@fujma.com</a>. We will respond within thirty (30) calendar days. Where requests are complex or numerous, we may extend this period by a further two months upon prior written notification. You also retain the right to lodge a complaint with the relevant supervisory authority in your jurisdiction.</p>
            </section>

            {/* 10 */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Our website uses cookies and similar tracking technologies to analyse traffic, maintain session continuity, and serve relevant content. Cookies may be first-party (set by Fujma Limited) or third-party (set by analytics and advertising partners such as Google Analytics and Meta Pixel).</p>
              <p>You may manage or disable cookies through your browser settings. Disabling certain cookies may impair the functionality of specific areas of the website. Third-party analytics and advertising tools are governed by the respective providers' privacy policies, which we encourage you to review independently.</p>
            </section>

            {/* 11 */}
            <section id="data-retention">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Data Retention</h2>
              <p>We retain personal data for as long as is necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, and reporting obligations. Business information shared in the course of a service engagement will be retained for the duration of the client relationship and for a minimum of seven (7) years thereafter, or such longer period as required by applicable law or professional standards, unless earlier deletion is requested and there is no legal basis for continued retention.</p>
            </section>

            {/* 12 */}
            <section id="data-security">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Data Security</h2>
              <p>Fujma Limited implements appropriate technical and organisational measures to protect personal data against unauthorised access, accidental loss, alteration, disclosure, or destruction. Whilst we apply industry-recognised security practices, no method of electronic transmission or digital storage is entirely secure. Transmission of data to Fujma Limited is carried out at your own risk. In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay in accordance with applicable law.</p>
            </section>

            {/* 13 */}
            <section id="third-party">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Third-Party Websites</h2>
              <p>This website may contain links to third-party websites or platforms. Such links are provided for convenience only and do not constitute an endorsement. Fujma Limited exercises no control over, and accepts no responsibility for, the content, privacy practices, or data handling of any third-party website. You are encouraged to review the privacy policies of any third-party websites you access independently.</p>
            </section>

            {/* 14 */}
            <section id="children">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Children's Privacy</h2>
              <p>Our services are directed exclusively at adults and business entities. We do not knowingly collect personal data from individuals under the age of eighteen (18). If we become aware that personal data has been inadvertently collected from a minor, we will take prompt steps to delete such data. If you believe we hold data relating to a minor, please contact us immediately at <a href="mailto:contact@fujma.com" className="text-royal hover:underline">contact@fujma.com</a>.</p>
            </section>

            {/* 15 */}
            <section id="changes">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Changes to This Policy</h2>
              <p>Fujma Limited reserves the right to update or amend this Privacy Policy at any time. Where changes are material, we will provide advance notice by publishing the revised Policy on our website and, where reasonably practicable, by direct notification. Continued use of our website or services following publication of any update constitutes acceptance of the revised Policy.</p>
            </section>

            {/* 16 */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Data Controller and Contact</h2>
              <p className="mb-4">Fujma Limited is the data controller responsible for the processing of personal data described in this Policy. For all privacy-related enquiries, requests, or concerns, please contact:</p>
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
            </section>

          </div>

          {/* Back to top */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <a
              href="#"
              className="text-sm font-semibold text-royal hover:underline"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
