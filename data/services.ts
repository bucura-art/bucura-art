export type Service = {
  name: string;
  description: string;
  price: string;
  cta: string;
  href: string;
};

export const services: Service[] = [
  {
    name: "SEO & AEO",
    description:
      "Improve your website's or app visibility with practical on-page and technical search optimization.",
    price: "Unspecified",
    cta: "Discuss SEO",
    href: "/contact",
  },
  {
    name: "Web Development",
    description:
      "Build responsive, accessible websites and web applications tailored to your goals.",
    price: "Unspecified",
    cta: "Discuss a website",
    href: "/contact",
  },
  {
    name: "IT Consultancy",
    description:
      "Get clear guidance on technology choices, digital workflows, and project planning.",
    price: "Unspecified",
    cta: "Book a consultation",
    href: "/contact",
  },
  {
    name: "Web/App Testing",
    description:
      "Ensure your website or app works as intended with thorough testing and quality assurance.",
    price: "Unspecified",
    cta: "Get testing",
    href: "/contact",
  },
  {
    name: "UI/UX Design",
    description:
      "Shape intuitive user experiences with clear layouts, thoughtful flows, and responsive interfaces.",
    price: "Unspecified",
    cta: "Discuss a design",
    href: "/contact",
  },
  {
    name: "Workflow Automation",
    description:
      "Reduce repetitive work by connecting tools and automating common business processes.",
    price: "Unspecified",
    cta: "Automate a workflow",
    href: "/contact",
  },
  {
    name: "Payment API Integration",
      description:
        "Integrate payment gateways and APIs to securely process transactions on your website or app.",
    price: "Unspecified",
    cta: "Discuss Integration",
    href: "/contact",
  },
];