import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: [
    "/",
    "/about",
    "/locations",
    "/contact",
    "/services/app-design",
    "/services/web-design",
    "/services/graphic-design",
  ],
} satisfies Config;
