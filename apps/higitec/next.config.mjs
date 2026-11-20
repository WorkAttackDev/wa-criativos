import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@wa-criativos/react-utils"],
  images: {
    qualities: [75, 90, 95, 100],
  },
};

export default withNextIntl(nextConfig);
