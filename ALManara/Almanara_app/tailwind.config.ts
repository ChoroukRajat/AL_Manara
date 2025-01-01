import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Oswald'], // Replace 'My Font' with the font name from @font-face
      },
      colors: {
        customBlue: "#233b62",
        customRed: "#b6072c",
      },
    },},
  plugins: [],
});

export default config;
