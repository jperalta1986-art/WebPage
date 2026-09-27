/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-rust': '#572F30',
        'brand-forest': '#4D523E',
        'brand-sand': '#EAE1D5',
        'brand-sand-80': 'rgba(234,225,213,0.8)',
        'brand-terracotta': '#A45A3A',
        'brand-charcoal': '#231D1D',
      },
      fontFamily: {
        'article': ['Article', 'serif'],
        'muara': ['Muara', 'serif'],
        'worksans': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
