export const contactLinksObj = {
  phone: {
    href: "tel:+244923228585",
    label: "+244 923 228 585",
  },
  email: {
    href: "mailto:info@refitec.com",
    label: "info@refitec.com",
  },
  recruitingEmail: {
    href: "mailto:carreiras@grupo-naval.com",
    label: "carreiras@grupo-naval.com",
  },
};

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
  products: {
    key: "products" as const,
    href: "#products",
  },
  career: {
    key: "career" as const,
    href: "#career",
  },
  news: {
    key: "news" as const,
    href: "#news",
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
  // linksObj.timeline,
  linksObj.products,
  linksObj.career,
  linksObj.news,
  linksObj.contacts,
];
