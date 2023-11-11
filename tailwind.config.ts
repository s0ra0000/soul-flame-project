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
        "bg-1": "#F2F2F2",
        "bg-2": "#D9D9D9",
        "title": "linear-gradient(90deg, rgba(4,162,180,1) 0%, rgba(34,216,209,1) 100%)",
        "silver": "#404040"
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
