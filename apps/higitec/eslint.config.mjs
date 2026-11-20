import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "next-env.d.ts"]),
  {
    // embla syncs its selection into React state from an effect by design
    files: ["src/components/ui/carousel.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
