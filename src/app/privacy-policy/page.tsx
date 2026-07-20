import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

const collectedInformation = [
  "Your name and organization",
  "Your email address and phone number",
  "Your area of interest",
  "The content of your message or inquiry",
  "Other information you choose to provide",
];

const informationUses = [
  "Respond to questions and consulting inquiries",
  "Communicate about potential or existing services",
  "Schedule and prepare for discussions",
  "Operate, secure, and improve the website",
  "Maintain appropriate business and administrative records",
  "Comply with legal, regulatory, or contractual obligations",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-20 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-warm" />
            <span className="eyebrow">BroadPivot Consulting LLC</span>
          </div>
          <h1 className="display mt-8">Privacy Policy</h1>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-500">
            Effective Date: July 19, 2026
          </p>
        </div>
      </section>

      <article className="wrap py-16 lg:py-24 max-w-4xl">
        <div className="border-l-2 border-accent-warm bg-paperDeep/60 px-6 py-5 font-serif text-[1.2rem] leading-relaxed text-ink-800">
          BroadPivot Consulting LLC respects your privacy. This policy explains how information may be collected, used, shared, and protected when you visit our official website or contact us through the website.
        </div>

        <div className="mt-14 space-y-12 body-prose text-ink-700">
          <PolicySection title="Website Covered by This Policy">
            <p>This Privacy Policy applies to the official BroadPivot Consulting LLC website at broadpivotllc.com, including any webpages or subdomains that link to this policy.</p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p>We may collect information that you voluntarily provide when you submit the contact form, send us an email, or otherwise communicate with us, including:</p>
            <ul>{collectedInformation.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>The website and service providers that support hosting, security, form delivery, email, and site performance may automatically process limited technical information, such as your IP address, browser type, device type, pages visited, approximate location, and the date and time of your visit. If BroadPivot later enables optional analytics or other tracking tools that materially change these practices, this policy will be updated.</p>
          </PolicySection>

          <PolicySection title="How We Use Information">
            <p>We may use information collected through the website to:</p>
            <ul>{informationUses.map((item) => <li key={item}>{item}</li>)}</ul>
          </PolicySection>

          <PolicySection title="How Information May Be Shared">
            <p>BroadPivot does not sell or rent personal information submitted through this website. We may share information with service providers that support website hosting, form delivery, email, information technology, professional services, or other business operations. These providers may access information only as needed to perform services on our behalf.</p>
            <p>We may also disclose information when required by law or when reasonably necessary to protect the rights, safety, property, or operations of BroadPivot, our clients, website visitors, or others.</p>
          </PolicySection>

          <PolicySection title="Cookies and Website Technology">
            <p>The website may use cookies or similar technologies that are necessary for site operation, security, and performance. BroadPivot does not use this website to sell personal information or for targeted advertising. If optional analytics or other tracking technologies are added, this policy will be updated as appropriate.</p>
          </PolicySection>

          <PolicySection title="Data Retention">
            <p>We retain information only for as long as reasonably necessary to respond to inquiries, provide services, maintain appropriate records, resolve disputes, enforce agreements, and meet legal or contractual obligations.</p>
          </PolicySection>

          <PolicySection title="Data Security">
            <p>BroadPivot uses reasonable administrative and technical measures to protect information. However, no website, email transmission, or electronic storage system can be guaranteed to be completely secure.</p>
            <p className="border-l-2 border-accent-warm bg-paperDeep/60 px-6 py-5 font-semibold text-ink-900">Please do not submit sensitive personal, financial, health, security, or confidential information through the website contact form.</p>
          </PolicySection>

          <PolicySection title="Your Choices">
            <p>You may contact BroadPivot to ask about, correct, or request deletion of personal information you have submitted, subject to applicable legal, contractual, security, and recordkeeping requirements.</p>
          </PolicySection>

          <PolicySection title="Children’s Privacy">
            <p>This website is intended for business and professional audiences and is not directed to children under 13. BroadPivot does not knowingly collect personal information from children under 13.</p>
          </PolicySection>

          <PolicySection title="Links to Other Websites">
            <p>The website may contain links to third-party websites, such as LinkedIn. BroadPivot is not responsible for the privacy practices or content of external websites. Visitors should review the privacy notices of those sites.</p>
          </PolicySection>

          <PolicySection title="Changes to This Policy">
            <p>We may update this Privacy Policy to reflect changes in our website, services, technology, or legal requirements. The effective date at the top of the policy will be updated when changes are made.</p>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p>For questions or requests related to this Privacy Policy, please contact:</p>
            <address className="not-italic leading-relaxed">
              <strong>BroadPivot Consulting LLC</strong><br />
              Email: <a href="mailto:info@broadpivotllc.com">info@broadpivotllc.com</a><br />
              Website: broadpivotllc.com<br />
              United States
            </address>
          </PolicySection>
        </div>
      </article>
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-[1.8rem] leading-tight tracking-tightish text-ink-900">{title}</h2>
      <div className="mt-5 space-y-5 leading-relaxed">{children}</div>
    </section>
  );
}
