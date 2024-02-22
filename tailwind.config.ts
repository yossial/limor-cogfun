import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.slate,
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      'lobster': ['Lobster']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
