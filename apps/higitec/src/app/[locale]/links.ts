export const contactLinksObj = {
  phone: {
    href: "tel:+244923228585",
    label: "+244 923 228 585",
  },
  email: {
    href: "mailto:info@higitec.com",
    label: "info@higitec.com",
  },
  recruitingEmail: {
    label: "recrutamento@everywhere-gt.com",
    href: "mailto:recrutamento@everywhere-gt.com",
  },
};

export const linksObj = {
  whoWeAre: {
    href: "/#who-we-are",
    key: "about" as const,
  },
  ourBrands: {
    href: "/#our-brands",
    key: "products" as const,
  },
  production: {
    href: "/#production",
    key: "production" as const,
  },
  workWithUs: {
    href: "/#work-with-us",
    key: "workWithUs" as const,
  },
  contacts: {
    href: "/#contacts",
    key: "contacts" as const,
  },
  termsOfService: {
    href: "/terms-of-service",
    key: "termsOfService" as const,
  },
  cookiesPolicy: {
    href: "/cookies-policy",
    key: "cookiesPolicy" as const,
  },
  privacyPolicy: {
    href: "/terms-of-service",
    key: "privacyPolicy" as const,
  },
};

export const navLinks = [
  linksObj.whoWeAre,
  linksObj.ourBrands,
  linksObj.production,
  linksObj.workWithUs,
  linksObj.contacts,
];
