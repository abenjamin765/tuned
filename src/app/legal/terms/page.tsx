import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "TUNED terms of use.",
};

export default function TermsPage() {
  return (
    <div className="section-pad">
      <div className="shell max-w-prose">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-4xl tracking-tightish md:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: September 6, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink/85">
          <p>
            By accessing this website you agree to these terms. If you do not
            agree, do not use the site. You must be 21+ (or of legal age in your
            jurisdiction) to enter.
          </p>
          <h2 className="font-display text-2xl text-ink">Products</h2>
          <p>
            TUNED products contain Delta-9 THC. They are not intended to
            diagnose, treat, cure, or prevent any disease. Availability varies by
            jurisdiction. You are responsible for complying with local law.
          </p>
          <h2 className="font-display text-2xl text-ink">Intellectual property</h2>
          <p>
            Brand names, packaging designs, copy, and site visuals are owned by
            TUNED or its licensors. You may not reproduce them without permission.
          </p>
          <h2 className="font-display text-2xl text-ink">Disclaimer</h2>
          <p>
            Site content is provided “as is.” We disclaim warranties to the
            fullest extent permitted by law. Production deployments should use
            counsel-reviewed terms.
          </p>
          <h2 className="font-display text-2xl text-ink">Governing law</h2>
          <p>
            Governing law and venue will be specified in the live commercial
            terms for your region.
          </p>
        </div>
      </div>
    </div>
  );
}
