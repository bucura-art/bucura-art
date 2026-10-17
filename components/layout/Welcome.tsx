import { profile } from "@/data/profile";
import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <div className="hidden pt-14 md:block md:pt-0">
      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <Image
          src="/projects/bucura-logo.png"
          alt={`${profile.name} avatar`}
          width={56}
          height={56}
          className="size-14 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h2 className="mb-2 text-lg font-bold text-slate-900">{profile.name}</h2>
          <p className="inline-block rounded-2xl rounded-tl-sm bg-slate-100 px-5 py-3 text-slate-900">
            Hey there, let&apos;s connect
          </p>
        </div>
      </div>
    </div>
  );
}