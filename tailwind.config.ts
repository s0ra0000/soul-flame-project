import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary": "#20d0d9",
        "bg-1": "#ffffff",
        "bg-2": "#f5f4f1",
        "bg-3": "#b6ccd8",
        "bg-4": "#fffefb",
        "title": "linear-gradient(90deg, rgba(4,162,180,1) 0%, rgba(34,216,209,1) 100%)",
        "silver": "#3b3c3d"
      },
      boxShadow:{
        "primary": "0 10px 30px -10px rgba(4,162,180,.6);",
        "secondary": "0 10px 30px -10px rgba(138,158,127,.6);",
        "third": "0 10px 30px -10px rgba(239,110,40,.6);"
      }
    },
  },
  plugins: [],
}
export default config
