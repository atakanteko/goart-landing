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
      'xl': {'min': '906px'},
      'mobile': { 'raw': '(max-width: 375px)' },
      'mobile-md': { 'raw': '(max-width: 568px) (min-width: 376px)',  }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'meet-our-team-name-color': '#F8F8FA',
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
        "about-us-margin-top": "34.75rem",
        "margin-top-for-sm-mobile":"24.3rem",
        "margin-top-for-md-mobile":"34rem",
        "margin-top-for-lg-mobile":"38rem",
        "waitList-margin-bottom":"12.6875rem",
        "waitList-social-icons-margin-right":"1.700rem",
        3: "0.813rem",
        4: "1.063rem",
        192: "12rem",
        26: "1.625rem",
        342: "18rem",
        62: "3.875rem",
        "mobile-icons-space": "12rem",
        "mobile-icons-space-sm": "22rem",
      },
      backgroundImage: {
        "home-cover": 'url("../public/assets/images/move-to-earn-cover.png")',
        "purple-bicycle": 'url("../public/assets/images/background-image-second-page-mobile.png")',
        "about-us-new-bg": 'url("../public/assets/images/about-us-new-bg.png")',
        "about-us-mobile": 'url("../public/assets/images/about-us-mobile.png")',
        "resp-home-cover": 'url("../public/assets/images/resp-home-bg.png")',
        "section-two-bg-cover": 'url("/assets/images/second-section-bg-cover.png")',
        "gradient-content-card": 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
        "home-page-btn-bg": 'linear-gradient(94.01deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 99.82%)',
        "second-page-information-box-bg": 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)',
        "second-page-information-box-exit-bg": 'linear-gradient(225deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%);',
      },
      backgroundPosition: {
        "top-right-70": "top 70px right"
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif']
      },
      width: {
        'waitList-sm': '20.3125rem',
        'waitList-md': '20.3125rem',
        'waitList-xl': '95rem',
        'waitList-text-xl': '43.75rem',
        'waitList-input-xl': '14.375rem',
        'about-btn-mobile-width': '9.4375rem',
        'second-page-information-card-width': '47.0625rem',

        'waitList-width': '96rem',
        'waitList-input-width': '18.8125rem',
        'waitList-input-width-large': '30.625rem',

        'waitList-btn': '9.5625rem',
        'waitList-btn-xl': '30.625rem',
        'waitList-btn-sm': '18.8125rem',
        'waitList-btn-md': '25rem',
        'waitList-btn-lg': '40rem',
      },
      height: {
        'waitList-sm': '20.3125rem',
        'waitList-xl': '25.625rem',
        'waitList-input-height': '3.125rem',
        'waitList-btn': '3.125rem',
        'about-btn-mobile-height': '2.625rem',
        'second-page-information-card-height': '22.375rem',

      }
    }
  },
  plugins: [],
}
