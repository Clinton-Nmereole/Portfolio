/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Windstone: "Windstone",
        Rotten: "Rotten",
        Colton: "Colton",
        Essential: "Essential-Economy",
        Coreta: "Coreta",
        Carlosea: "Carlosea",
        Neue: "Neue",
        Bebas: "BebasNeue",
        Impana: "Impana",
        Orbiter: "Orbiter",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "13xl": "16rem",
      },
    },
  },
  plugins: [],
};
