import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "TUNED privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="section-pad">
      <div className="shell max-w-prose">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-4xl tracking-tightish md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: September 6, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink/85">
          <p>
            This policy describes how TUNED (“we,” “us”) handles information when
            you visit tuned brand properties. This is a marketing site template;
            production deployments should replace this text with counsel-reviewed
            language.
          </p>
          <h2 className="font-display text-2xl text-ink">Information we collect</h2>
          <p>
            Depending on configuration, we may collect device and usage data
            (pages viewed, approximate location via IP, browser type), voluntary
            form submissions, and cookies or similar technologies for analytics
            and preferences—including the age-gate localStorage flag.
          </p>
          <h2 className="font-display text-2xl text-ink">How we use information</h2>
          <p>
            To operate and improve the site, honor age-gating, respond to
            inquiries, fulfill orders (when commerce is enabled), and meet legal
            obligations.
          </p>
          <h2 className="font-display text-2xl text-ink">Sharing</h2>
          <p>
            We do not sell personal information. We may share data with service
            providers under contract, or when required by law.
          </p>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p>
            For privacy requests, contact the address published on the live
            storefront or packaging.
          </p>
        </div>
      </div>
    </div>
  );
}
