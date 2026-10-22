import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const logoDevToken = process.env.LOGO_DEV_PUBLISHABLE_KEY?.trim();
const hasLogoDevToken =
  logoDevToken && logoDevToken !== "PASTE_YOUR_LOGO_DEV_PUBLISHABLE_KEY_HERE";

function getLogoDomain(platform: string) {
  switch (platform.toLowerCase()) {
    case "whatsapp":
      return "whatsapp.com";
    case "instagram":
      return "instagram.com";
    case "github":
      return "github.com";
    case "linkedin":
      return "linkedin.com";
    default:
      return null;
  }
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] [--foreground:222_47%_11%] [--muted:215_16%_47%] [--border:214_32%_85%] text-foreground">
      <div className="h-0 md:h-auto md:px-6 md:pt-6">
        <Navbar topLeft />
      </div>
      <main className="flex h-[100svh] items-center justify-start overflow-hidden px-4 pb-24 pt-4 md:px-8 md:pb-8 md:pt-24">
        <section
          aria-labelledby="contact-heading"
          className="w-full max-w-[18rem] rounded-4xl  border-slate-900 bg-slate-400 p-1 shadow-xl shadow-slate-900/20"
        >
          <div className="overflow-hidden rounded-[1.6rem] bg-white">
            <div className="flex justify-center bg-white pt-2" aria-hidden="true">
              <span className="h-1 w-12 rounded-full bg-slate-200" />
            </div>

            <div className="px-4 pb-4 pt-3">
              <h1
                id="contact-heading"
                className="mb-4 text-center text-xl font-bold tracking-tight text-slate-900"
              >
                Contact
              </h1>

              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-sky-400 p-0.5 shadow-md shadow-indigo-500/20">
                  <Image
                    src="/developer/profile-picture.jpg"
                    alt="Profile picture"
                    width={88}
                    height={88}
                    priority
                    className="size-20 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-slate-900">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-slate-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm font-semibold">{profile.location}</p>
                </div>
                <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-emerald-500"
                  />
                  24/7 Available
                </p>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div
                role="group"
                aria-label="Social links"
                className="grid grid-cols-2 gap-2"
              >
                {socials
                  .filter(
                    (social) =>
                      social.platform !== "GitHub" &&
                      social.platform !== "LinkedIn",
                  )
                  .map((social) => {
                    const logoDomain = getLogoDomain(social.platform);
                    const actionLabel =
                      social.platform === "WhatsApp"
                        ? "Message"
                        : social.platform === "Instagram"
                          ? "DM"
                          : social.platform === "Phone"
                            ? "Call"
                            : "Email";
                    const isExternal = social.url.startsWith("https://");

                    return (
                      <Link
                        key={social.platform}
                        href={social.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={`${social.platform}: ${social.username}`}
                        className="group flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-center text-xs font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <span className="flex size-7 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition group-hover:text-indigo-700">
                          {social.platform.toLowerCase() === "email" ? (
                            <EmailIcon />
                          ) : logoDomain && hasLogoDevToken ? (
                            <Image
                              src={`https://img.logo.dev/${logoDomain}?token=${logoDevToken}&size=96&format=png`}
                              alt=""
                              width={96}
                              height={96}
                              unoptimized
                              className="size-4 object-contain"
                            />
                          ) : logoDomain ? (
                            <span aria-hidden="true" className="text-xs font-bold">
                              {social.platform.slice(0, 2).toUpperCase()}
                            </span>
                          ) : (
                            <PhoneIcon />
                          )}
                        </span>
                        <span>{actionLabel}</span>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}