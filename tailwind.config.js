/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['VT323', 'monospace'],
      },
      colors: {
        retro: {
          // Palette tokens
          stone: '#e4dfd9',
          charcoal50: '#fafafa',
          charcoal100: '#f5f5f5',
          charcoal200: '#e5e5e5',
          charcoal300: '#d4d4d4',
          charcoal400: '#a3a3a3',
          charcoal500: '#737373',
          charcoal600: '#525252',
          charcoal700: '#404040',
          charcoal800: '#2e2e2e',
          charcoal900: '#232323',
          charcoal950: '#0a0a0a',
          orange50: '#fdf2ed',
          orange100: '#fbe5db',
          orange200: '#f6bea4',
          orange300: '#f0966c',
          orange400: '#e87038',
          orange500: '#de5113',
          orange600: '#b93f0c',
          orange700: '#93320b',
          orange800: '#752a0d',
          orange900: '#5d240e',
          orange950: '#321104',

          // Backward-compatible aliases used in UI classes
          base: '#e4dfd9',
          charcoal: '#232323',
          charcoalBorder: '#525252',
          charcoalShadow: '#0a0a0a',
          primary: '#de5113',
          primaryShadow: '#93320b',
          textLight: '#e4dfd9',
          textDark: '#232323',
        },
      },
    },
  },
  plugins: [],
}

