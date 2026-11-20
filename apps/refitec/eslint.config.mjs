import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "next-env.d.ts", "test-results/**"]),
  {
    // Slot-style ref forwarding and embla's effect sync predate the React Compiler rules
    files: ["src/app/**/animations.tsx", "src/components/ui/carousel.tsx"],
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
