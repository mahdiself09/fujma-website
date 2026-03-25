import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Fujma Limited",
  description:
    "Read the full Terms of Service for Fujma Limited, governing all professional services including product sourcing, brand building, company formation, and trademark registration.",
};

const sections = [
  { id: "definitions", label: "1. Definitions" },
  { id: "relationship", label: "2. Terms & Signed Agreements" },
  { id: "electronic-agreement", label: "3. Electronic Agreement" },
  { id: "nature-of-services", label: "4. Nature of Services" },
  { id: "timelines", label: "5. Service Timelines" },
  { id: "supplier-risk", label: "6. Supplier Independence & Risk" },
  { id: "client-obligations", label: "7. Client Obligations" },
  { id: "fees-payment", label: "8. Fees, Payment & Chargebacks" },
  { id: "refund-cancellation", label: "9. Refund & Cancellation" },
  { id: "confidentiality", label: "10. Confidentiality" },
  { id: "intellectual-property", label: "11. Intellectual Property" },
  { id: "limitation-liability", label: "12. Limitation of Liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "force-majeure", label: "14. Force Majeure" },
  { id: "warranties", label: "15. Warranties & Representations" },
  { id: "governing-law", label: "16. Governing Law" },
  { id: "severability", label: "17. Severability" },
  { id: "waiver", label: "18. Waiver" },
  { id: "amendments", label: "19. Amendments" },
  { id: "entire-agreement", label: "20. Entire Agreement" },
  { id: "contact", label: "21. Contact" },
];

export default function TermsOfServicePage() {
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
              Terms of Service
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
            Please read these Terms of Service carefully before engaging Fujma Limited. By submitting an enquiry, completing a payment, accepting a proposal, or accessing our website — whether by electronic means, email, or any other channel — you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, you must not use our services or access our website.
          </div>

          <div className="space-y-14 text-[15px] leading-relaxed text-gray-700">

            {/* 1 */}
            <section id="definitions">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Definitions</h2>
              <p className="mb-4">In these Terms, the following definitions apply:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Company", "we", "us", or "our"</strong> means Fujma Limited, a company incorporated in Hong Kong.</li>
                <li><strong>"Client", "you", or "your"</strong> means any individual or legal entity that engages Fujma Limited for services.</li>
                <li><strong>"Services"</strong> means the intangible, professional, consulting, and operational services provided by Fujma Limited, including brand building, product sourcing, Hong Kong company formation, trademark registration, import/export facilitation, logistics coordination, and any related advisory services. All Services are non-tangible in nature and do not constitute the sale of physical goods by Fujma Limited.</li>
                <li><strong>"Agreement"</strong> means any service contract, written proposal, statement of work, or written confirmation duly executed between the Company and the Client.</li>
                <li><strong>"Supplier"</strong> means any manufacturer, factory, production facility, or product vendor located in Mainland China or elsewhere.</li>
                <li><strong>"Confidential Information"</strong> means any non-public business data, product concepts, sourcing strategies, supplier details, pricing information, brand materials, or trade secrets disclosed by either party.</li>
                <li><strong>"Intellectual Property"</strong> means all patents, trademarks, service marks, trade names, copyrights, designs, trade secrets, know-how, and all other intellectual property rights, whether registered or unregistered.</li>
                <li><strong>"Payment"</strong> means any sum remitted to Fujma Limited in consideration for Services, whether by bank transfer, invoice settlement, or any other agreed payment method.</li>
              </ul>
            </section>

            {/* 2 */}
            <section id="relationship">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Relationship Between These Terms and Signed Agreements</h2>
              <div className="p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl italic mb-4">
                Where the Client and Fujma Limited have executed a separate written agreement — including a service contract, proposal, statement of work, or letter of engagement — the terms of that signed agreement shall take precedence over these Terms of Service to the extent of any direct conflict or inconsistency. The order of precedence is: (1) signed Agreement; (2) these Terms of Service.
              </div>
              <p>In all other respects, these Terms shall remain in full effect and shall be read together with any such agreement as a single, integrated legal framework. The absence of a separate written agreement does not limit the application or enforceability of these Terms.</p>
            </section>

            {/* 3 */}
            <section id="electronic-agreement">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Electronic Agreement and Legally Binding Acceptance</h2>
              <p className="mb-4">The Client acknowledges and agrees that a legally binding agreement with Fujma Limited is formed upon the occurrence of any of the following:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Submission of an enquiry, contact form, or service request through our website</li>
                <li>Written acceptance of a proposal, quotation, or statement of work by email or any other electronic means</li>
                <li>Remittance of any Payment to Fujma Limited, whether in whole or in part</li>
                <li>Commencement of any service activity following written or verbal instruction by the Client</li>
              </ul>
              <p>Electronic acceptance — including acceptance by email, website interaction, or payment — carries the same legal force and effect as a handwritten signature. The Client waives any right to contest the validity or enforceability of this agreement on the basis that it was formed electronically. These Terms are governed by the Electronic Transactions Ordinance (Cap. 553) of Hong Kong and applicable international standards for electronic commerce.</p>
            </section>

            {/* 4 */}
            <section id="nature-of-services">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Nature of Services</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">4.1 Intangible Professional Services</h3>
              <p className="mb-6">Fujma Limited provides exclusively intangible, professional, consulting, and operational services. No physical goods are sold by Fujma Limited to the Client. All engagements involve the provision of expertise, coordination, facilitation, advisory support, and intermediary services. This characterisation is material to the payment, refund, and chargeback provisions of these Terms.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">4.2 Commencement of Services</h3>
              <p className="mb-6">Unless otherwise agreed in writing, Services may commence immediately upon receipt of Payment or written confirmation of engagement. By submitting payment or written confirmation, the Client explicitly acknowledges that service delivery has begun or been irrevocably committed, and that the non-refundable character of payments is a direct consequence of this immediate commencement.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">4.3 Independent Service Provider — No Partnership or Agency</h3>
              <p className="mb-6">Fujma Limited provides services strictly as an independent professional service provider. Nothing in these Terms, any Agreement, or the course of dealing between the parties shall be construed as creating a partnership, joint venture, employment relationship, franchise, or agency of any kind between Fujma Limited and the Client.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">4.4 Intermediary Role</h3>
              <p className="mb-6">In the majority of engagements, Fujma Limited acts as an operational intermediary — coordinating sourcing, supplier negotiations, logistics, and administrative processes on the Client's behalf. The Client remains the ultimate business principal, brand owner, and decision-maker at all times. Fujma Limited does not manufacture, produce, warehouse, or take title to any goods.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">4.5 Facilitated Purchasing</h3>
              <p className="mb-6">In certain engagements, Fujma Limited may facilitate the procurement of goods from third-party suppliers, acting as a coordinating agent. In such cases, Fujma Limited does not take title to, ownership of, or commercial risk in the goods. The Client assumes full ownership, commercial risk, and responsibility for the goods from the point of confirmation of purchase.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">4.6 No Guaranteed Outcomes</h3>
              <p>All Services are provided on a commercially reasonable efforts basis. Fujma Limited does not guarantee any specific business result, revenue outcome, product approval, trademark registration success, company formation timeline, customs clearance, or market performance. Results are subject to factors outside Fujma Limited's control.</p>
            </section>

            {/* 5 */}
            <section id="timelines">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Service Timeline and Delivery Estimates</h2>
              <div className="p-5 border-l-4 border-royal bg-blue-50 rounded-r-xl italic mb-4">
                All timelines, milestones, and delivery estimates communicated by Fujma Limited — whether in proposals, agreements, emails, or verbal discussions — are estimates only. They do not constitute binding commitments or contractual guarantees.
              </div>
              <p className="mb-4">Delivery timelines are subject to variation due to factors including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Supplier production schedules, capacity constraints, or operational disruptions</li>
                <li>Freight carrier delays, port congestion, or customs clearance backlogs</li>
                <li>Government regulatory processing times for trademark registration, company formation, or import permits</li>
                <li>Public holidays, national events, or seasonal factory shutdowns in China or Hong Kong</li>
                <li>Force majeure events as defined in Section 14</li>
              </ul>
              <p>Delays attributable to third-party suppliers, logistics providers, or government authorities do not constitute a breach of contract by Fujma Limited and shall not entitle the Client to cancel the engagement, withhold payment, or claim damages.</p>
            </section>

            {/* 6 */}
            <section id="supplier-risk">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Supplier Independence and Client Risk</h2>
              <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl font-semibold mb-4">
                IMPORTANT: Fujma Limited does not manufacture, produce, inspect, certify, or exercise operational control over any third-party supplier, manufacturer, or production facility. All risks relating to product quality, safety, fitness for purpose, regulatory compliance, labelling requirements, and performance are borne exclusively by the Client.
              </div>
              <p className="mb-4">In particular, Fujma Limited accepts no responsibility for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>The quality, safety, merchantability, or fitness for purpose of any products sourced from or produced by third-party manufacturers</li>
                <li>A supplier's compliance with applicable laws, industry standards, export controls, or certification requirements</li>
                <li>Delays, defects, or failures in production attributable to a supplier's operational circumstances</li>
                <li>The accuracy, completeness, or validity of compliance certificates, test reports, or declarations of conformity provided by suppliers</li>
                <li>Any claim by a third party arising from products manufactured, supplied, or delivered by a Supplier</li>
              </ul>
              <p>The Client is solely responsible for conducting independent due diligence on suppliers, arranging product inspections, verifying regulatory compliance, and obtaining all necessary certifications prior to importing, distributing, or selling any product.</p>
            </section>

            {/* 7 */}
            <section id="client-obligations">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Client Obligations</h2>
              <p className="mb-4">The Client agrees to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, complete, and timely information, instructions, and approvals required for the delivery of Services</li>
                <li>Respond promptly to requests for documentation, confirmations, or clarifications</li>
                <li>Ensure that all rights, licences, and authorisations required in connection with any product concept, brand identity, or business idea shared with Fujma Limited are validly held by the Client</li>
                <li>Comply with all applicable laws in their jurisdiction, including import regulations, consumer product safety laws, labelling requirements, intellectual property laws, and tax obligations</li>
                <li>Not use Fujma Limited's Services for any purpose that is unlawful, fraudulent, misleading, or harmful to third parties</li>
                <li>Notify Fujma Limited promptly of any circumstances that may affect the delivery or scope of the agreed Services</li>
              </ul>
            </section>

            {/* 8 */}
            <section id="fees-payment">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Fees, Payment, and Anti-Chargeback Policy</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">8.1 Agreement of Fees</h3>
              <p className="mb-6">Service fees are agreed individually for each engagement and specified in the applicable proposal, contract, or invoice. All fees are exclusive of applicable taxes, duties, government filing charges, and third-party costs unless expressly stated otherwise.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">8.2 Payment Finality</h3>
              <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl font-semibold mb-6">
                ALL PAYMENTS MADE TO FUJMA LIMITED ARE FINAL AND NON-REFUNDABLE. Given that Services are intangible, custom, and project-specific, and may commence immediately upon receipt of payment or written engagement confirmation, the Client irrevocably acknowledges that all amounts paid represent valid consideration for Services rendered or committed.
              </div>

              <h3 className="text-lg font-semibold text-royal mb-2">8.3 Prohibited Chargebacks and Dispute Protocol</h3>
              <p className="mb-3">The Client agrees that initiating a chargeback, payment reversal, or dispute without first completing the mandatory dispute resolution procedure constitutes a material breach of these Terms. Prior to initiating any payment dispute, the Client must:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Submit a written complaint to contact@fujma.com specifying the nature of the dispute in reasonable detail</li>
                <li>Allow Fujma Limited a period of fourteen (14) calendar days to investigate and respond</li>
                <li>Engage in good-faith negotiation for a further period of fourteen (14) calendar days following Fujma Limited's response</li>
              </ul>
              <p className="mb-4">Any unjustified chargeback shall constitute a material breach of contract. Fujma Limited reserves the right to recover the full disputed amount, all fees, and to pursue legal proceedings in the courts of Hong Kong.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">8.4 Deposit and Milestone Payments</h3>
              <p className="mb-6">Fujma Limited may require an upfront deposit and/or milestone-based payments before commencing or continuing work. Fujma Limited reserves the right to suspend delivery of Services where any payment remains outstanding beyond the agreed due date.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">8.5 Third-Party Costs</h3>
              <p className="mb-6">The Client is solely responsible for all third-party costs incurred in connection with the Services, including supplier payments, product costs, freight and insurance, customs duties and taxes, government registration and filing fees, and trademark registration charges.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">8.6 Late Payment</h3>
              <p>Amounts not paid by the due date shall accrue interest at a rate of two percent (2%) per month, or the maximum rate permitted by applicable law, whichever is lower, calculated from the due date until the date of actual payment.</p>
            </section>

            {/* 9 */}
            <section id="refund-cancellation">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Refund and Cancellation Policy</h2>
              <p className="mb-4">All Services provided by Fujma Limited are custom, project-specific, and intangible. There is no automatic entitlement to a refund, partial credit, or service reversal.</p>
              <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl font-semibold mb-4">
                The Client expressly waives all rights to a refund, to the fullest extent permitted by applicable law, acknowledging that: (a) Services are intangible and non-returnable; (b) Services may begin immediately upon payment; (c) Fujma Limited incurs irrevocable costs and commitments upon engagement. Any exception to this policy must be agreed in writing, signed by an authorised representative of Fujma Limited, prior to any payment being made.
              </div>
              <p className="mb-4">Where the Client wishes to cancel an engagement, the following conditions apply:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Written notice of cancellation must be delivered to contact@fujma.com</li>
                <li>All service fees, third-party costs, and disbursements incurred or committed to the date of cancellation remain due and payable in full</li>
                <li>Upfront deposits are non-refundable in all circumstances, unless expressly stated to the contrary in a signed Agreement</li>
                <li>Where work has not yet commenced and no third-party commitments have been entered into, Fujma Limited may, at its sole discretion, offer a partial service credit applicable to future engagements</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="confidentiality">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Confidentiality</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">10.1 Mutual Obligation</h3>
              <p className="mb-6">Each party agrees to hold the other party's Confidential Information in strict confidence, to use it solely for the purpose of performing obligations under these Terms or the relevant Agreement, and not to disclose it to any third party without the prior written consent of the disclosing party, except as required by applicable law or valid judicial process.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">10.2 Client Business Information</h3>
              <p className="mb-6">Product concepts, sourcing strategies, supplier connections, brand strategies, and business plans shared by the Client are treated as commercially sensitive Confidential Information. Fujma Limited will disclose such information to Suppliers or other third parties only to the minimum extent necessary to carry out the relevant Service.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">10.3 Survival</h3>
              <p>Confidentiality obligations under this Section survive the termination or expiry of any Agreement or engagement for a period of five (5) years, or indefinitely in respect of trade secrets, unless a shorter or longer period is expressly agreed in writing by both parties.</p>
            </section>

            {/* 11 */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Intellectual Property</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">11.1 Client Ownership of Deliverables</h3>
              <p className="mb-6">All intellectual property created specifically for and assigned to the Client under a service engagement — including registered trademarks, brand identities, and product packaging — vests in the Client upon receipt of full and final payment of all outstanding fees. No transfer of title shall occur prior to such payment.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">11.2 Fujma Limited's Proprietary Materials</h3>
              <p className="mb-6">All methodologies, operating frameworks, templates, tools, processes, training materials, and pre-existing intellectual property developed or owned by Fujma Limited remain the exclusive intellectual property of Fujma Limited. No licence, right, or interest in such materials is granted to the Client except to the minimum extent necessary to use the specific deliverables.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">11.3 Client Warranty and Indemnity</h3>
              <p>The Client warrants that any brand name, logo, product concept, or other material submitted to Fujma Limited for use in the Services does not infringe the intellectual property rights of any third party. The Client shall indemnify, defend, and hold harmless Fujma Limited and its officers, employees, and agents against any claim, loss, or liability arising from any such infringement.</p>
            </section>

            {/* 12 */}
            <section id="limitation-liability">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Limitation of Liability</h2>
              <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl font-semibold mb-4">
                THIS SECTION MATERIALLY LIMITS FUJMA LIMITED'S LIABILITY. PLEASE READ CAREFULLY BEFORE ENGAGING OUR SERVICES.
              </div>
              <p className="mb-4">To the fullest extent permitted by the laws of the Hong Kong Special Administrative Region:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fujma Limited's aggregate liability to the Client for all claims shall not exceed the total fees paid by the Client to Fujma Limited in the three (3) months immediately preceding the event giving rise to the claim.</li>
                <li>Fujma Limited shall not be liable for any indirect, consequential, incidental, special, exemplary, or punitive damages, including but not limited to loss of revenue, loss of anticipated profit, loss of business opportunity, loss of goodwill, or loss of data.</li>
                <li>Fujma Limited shall not be liable for any act, omission, delay, error, insolvency, or failure of any third-party Supplier, manufacturer, freight company, customs authority, regulatory body, or government agency.</li>
                <li>Fujma Limited shall not be liable for any loss or damage arising from delivery timeline delays attributable to suppliers, logistics providers, government authorities, or force majeure events.</li>
              </ul>
            </section>

            {/* 13 */}
            <section id="indemnification">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Indemnification</h2>
              <p>The Client agrees to indemnify, defend, and hold harmless Fujma Limited and its officers, directors, shareholders, employees, contractors, and agents from and against any and all claims, demands, actions, proceedings, liabilities, losses, damages, fines, penalties, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) any breach by the Client of these Terms; (b) any infringement of a third party's intellectual property rights in connection with materials submitted by the Client; (c) the Client's failure to comply with applicable laws; (d) the Client's use, sale, distribution, or import of products sourced through Fujma Limited; or (e) any unjustified chargeback initiated by the Client.</p>
            </section>

            {/* 14 */}
            <section id="force-majeure">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Force Majeure</h2>
              <p>Fujma Limited shall not be liable for any delay, suspension, or failure to perform any obligation under these Terms where such delay or failure arises from circumstances beyond its reasonable control, including but not limited to: acts of God, natural disasters, epidemics or pandemics, war, civil unrest, acts of terrorism, governmental or regulatory action, changes in law or trade policy, sanctions or trade restrictions, factory shutdowns, port closures, labour disputes, power failures, or failures of telecommunications or internet infrastructure.</p>
            </section>

            {/* 15 */}
            <section id="warranties">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Warranties and Representations</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">15.1 Mutual Representations</h3>
              <p className="mb-6">Each party represents and warrants that: (a) it has full legal capacity and authority to enter into and perform its obligations under these Terms; (b) doing so does not breach any applicable law, regulation, or third-party obligation; and (c) it will comply with all applicable laws and regulations in connection with these Terms.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">15.2 Disclaimer of Implied Warranties</h3>
              <p>Save as expressly set out in these Terms, all warranties, representations, conditions, and undertakings, whether express or implied — including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement — are excluded to the fullest extent permitted by applicable law.</p>
            </section>

            {/* 16 */}
            <section id="governing-law">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law and Dispute Resolution</h2>

              <h3 className="text-lg font-semibold text-royal mb-2">16.1 Governing Law</h3>
              <p className="mb-6">These Terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region, without regard to conflict of law principles.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">16.2 Dispute Resolution — Mandatory Negotiation</h3>
              <p className="mb-6">In the event of any dispute, the parties shall first attempt resolution by good-faith negotiation. Either party may initiate this process by written notice specifying the nature and particulars of the dispute. The parties shall have thirty (30) calendar days from such notice to reach a negotiated resolution.</p>

              <h3 className="text-lg font-semibold text-royal mb-2">16.3 Litigation</h3>
              <p>If the dispute is not resolved through negotiation, either party may refer the matter to the courts of the Hong Kong Special Administrative Region, which shall have exclusive jurisdiction over all disputes arising under or in connection with these Terms.</p>
            </section>

            {/* 17 */}
            <section id="severability">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Severability</h2>
              <p>If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.</p>
            </section>

            {/* 18 */}
            <section id="waiver">
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Waiver</h2>
              <p>No failure or delay by Fujma Limited in exercising any right or remedy under these Terms shall constitute a waiver of that right or remedy. No waiver of any breach shall constitute a waiver of any subsequent breach. All waivers must be in writing and signed by an authorised representative of Fujma Limited.</p>
            </section>

            {/* 19 */}
            <section id="amendments">
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Amendments</h2>
              <p>Fujma Limited reserves the right to modify these Terms at any time by publishing an updated version on our website. Material changes will be communicated with appropriate notice. Continued engagement with our Services following publication constitutes acceptance. Amendments do not affect the terms of any Agreement already in force unless expressly agreed in writing by both parties.</p>
            </section>

            {/* 20 */}
            <section id="entire-agreement">
              <h2 className="text-2xl font-bold text-foreground mb-4">20. Entire Agreement</h2>
              <p>These Terms, together with any applicable signed Agreement, constitute the entire agreement between the parties with respect to their subject matter and supersede all prior representations, negotiations, understandings, and agreements — whether oral or written. In the event of conflict: (1) signed Agreement prevails; (2) these Terms of Service apply.</p>
            </section>

            {/* 21 */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-foreground mb-4">21. Contact</h2>
              <p className="mb-4">For all contractual, legal, or payment-related enquiries, please contact:</p>
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
