import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ["@wa-criativos/react-utils"],
  typedRoutes: true,
  images: {
    qualities: [100, 70, 75],
  }
};

export default withNextIntl(nextConfig);
