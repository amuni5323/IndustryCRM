// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './pages/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        perspective: {
          '1000': '1000px',
        },
        rotate: {
          'y-180': 'rotateY(180deg)',
        },
        transformStyle: {
          'preserve-3d': 'preserve-3d',
        },
        backfaceVisibility: {
          hidden: 'hidden',
        },
      },
    },
    plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.transform-style-preserve-3d': {
              'transform-style': 'preserve-3d',
            },
            '.backface-hidden': {
              'backface-visibility': 'hidden',
            },
            '.rotate-y-180': {
              transform: 'rotateY(180deg)',
            },
          });
        },
      ],
      

  };
  