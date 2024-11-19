import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderGray: "#d1d5db",
      },
      borderWidth: {
        'custom': '1px',  
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-checkbox': {
          '@apply appearance-none w-6 h-6 border-custom border-borderGray rounded-lg cursor-pointer relative': {},
          '&:checked': {
            '@apply bg-black border-0': {},
          },
          '&:checked::before': {
            content: '""',
            '@apply absolute inset-0 bg-[url("/icons/checked.png")] bg-no-repeat bg-center': {},
          },
          '&:not(:checked)': {
            '@apply bg-white': {},
          },
          '&::before': {
            content: '""',
            '@apply absolute inset-0': {},
          },
        },
      });
    },
  ],
};

export default config;