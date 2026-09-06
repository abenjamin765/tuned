import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/products";

export default function FAQSection({ limit }: { limit?: number }) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section className="section-pad">
      <div className="shell max-w-3xl">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="font-display text-4xl tracking-tightish">
          Questions, answered
        </h2>
        <div className="mt-12 space-y-0">
          {items.map((item) => (
            <details
              key={item.q}
              className="group border-b border-ink/10 py-5"
            >
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        {limit && (
          <Link href="/faq" className="btn-ghost mt-10 inline-flex">
            Full FAQ
          </Link>
        )}
      </div>
    </section>
  );
}
