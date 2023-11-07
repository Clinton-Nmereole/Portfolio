import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        devicon: ["*"], // include all devicons
        "devicon-plain": ["*"], // include all devicon-plain
      },
    }),
  ],
  adapter: vercel(),
});
