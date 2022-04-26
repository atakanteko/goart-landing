module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '375px'},
      'md': {'min': '376px', 'max': '568px'},
      'lg': {'min': '569px', 'max': '905px'},
      'mobile': { 'raw': '(max-width: 375px)' },
      'mobile-md': { 'raw': '(max-width: 568px) (min-width: 376px)',  }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'meet-our-team-bg': '#282828',
        primary: {
          300: "#9870D7",
          500: "#38197A",
        },
        purple: {
          500: "#38197A",
          600: "#2B1268",
          700: "#1F0C57",
          800: "#38197A",
          900: "#2B1268"
        },
        gray: {
          100: "#F8F8FA",
          200: "#E6E7E9",
          300: "#D6D6D8",
          500: "#919294",
          600: "#696A6B",
          700: "#565758",
          800: "#38383A",
          900: "#181819",
          1000: "#111115",
        }
      },
      borderRadius: {
        "sm": "0.4rem",
        DEFAULT: "0.8rem",
      },
      spacing: {
        3: "0.813rem",
        4: "1.063rem",
        192: "12rem",
        26: "1.625rem",
        342: "18rem",
        62: "3.875rem",
        "mobile-icons-space": "12rem",
        "mobile-icons-space-sm": "22rem",
        "mobile-icons-responsive-margin-right": "1.9725rem",
      },
      backgroundImage: {
        "home-cover": 'url("../public/assets/images/move-to-earn-cover.png")',
        "resp-home-cover": 'url("../public/assets/images/resp-home-bg.png")',
        "section-two-bg-cover": 'url("../public/assets/images/second-section-bg-cover.png")',
      },
      backgroundPosition: {
        "top-right-70": "top 70px right"
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif']
      },
    }
  },
  plugins: [],
}