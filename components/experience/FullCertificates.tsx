import { certificates } from "@/data/certificates";

export default function FullCertificates() {
  return (
    <section className="container py-24">
      <div>
        <h3 className="text-2xl text-slate-900 font-semibold mb-8 flex items-center gap-2">
          Certificates
        </h3>
        <div className="relative border-l border-border pl-8 space-y-12">
          {certificates.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-xl font-semibold mb-1 text-slate-900 flex flex-wrap items-center gap-2">
                {item.title}
              </h4>
              <p className="mb-2 text-xs text-emerald-700">
                <span className="font-medium text-slate-950">#{item.period}</span>
                <span className="px-1" aria-hidden="true">|</span>
                {item.status}
              </p>
              <p className="text-sm text-blue-400 mb-2">
                {item.institution}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-900">
                {item.focusAreas.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}