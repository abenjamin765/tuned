import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Gate",
  description: "TUNED age verification policy for adults 21+.",
};

export default function AgeGateLegalPage() {
  return (
    <div className="section-pad">
      <div className="shell max-w-prose">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-4xl tracking-tightish md:text-5xl">
          Age Gate Policy
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink/85">
          <p>
            TUNED products contain Delta-9 THC and are intended solely for
            adults who are at least 21 years of age (or the legal age in their
            jurisdiction, whichever is higher).
          </p>
          <p>
            Before accessing product information on this website, visitors must
            confirm they meet the minimum age requirement. Confirmation is stored
            in the browser via localStorage under the key{" "}
            <code className="rounded bg-mist px-1 py-0.5 font-mono text-xs">
              tuned-age-verified
            </code>{" "}
            and is not transmitted to our servers as part of the age-gate
            interaction.
          </p>
          <p>
            Age verification on this site is a first-party control and does not
            replace any government-issued ID checks that may be required at
            purchase or delivery.
          </p>
          <p>
            If you are under 21, please leave this site. Misrepresenting your age
            is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
