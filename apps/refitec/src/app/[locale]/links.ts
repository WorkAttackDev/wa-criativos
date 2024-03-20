export const linksObj = {
  whoWeAre: {
    key: "whoWeAre" as const,
    href: "#whoWeAre",
  },
  inNumbers: {
    key: "inNumbers" as const,
    href: "#inNumbers",
  },
  timeline: {
    key: "timeline" as const,
    href: "#timeline",
  },
  contacts: {
    key: "contacts" as const,
    href: "#contacts",
  },
  termsOfService: {
    key: "termsOfService" as const,
    href: "/terms-of-service",
  },
  cookiesPolicy: {
    key: "cookiesPolicy" as const,
    href: "/cookies-policy",
  },
  privacyPolicy: {
    key: "privacyPolicy" as const,
    href: "/privacy-policy",
  },
};

export const navLinks = [
  linksObj.whoWeAre,
  linksObj.inNumbers,
  linksObj.timeline,
  linksObj.contacts,
];
