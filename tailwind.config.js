/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#EAF4ED',
          100: '#CFE6D6',
          200: '#A3D0AF',
          400: '#4FA46B',
          500: '#2F8350',
          600: '#277A47',
          700: '#1E6847',
          800: '#164E35',
          900: '#0F3624'
        },
        gold: {
          50: '#FAF6EA',
          100: '#F4ECD0',
          300: '#DCBF79',
          400: '#CBA255',
          500: '#B88E3A',
          600: '#9C7322',
          700: '#7E5B15'
        },
        ink: {
          50: '#F8F9FA',
          100: '#EFF2F6',
          200: '#DDE3EB',
          400: '#7B8A9D',
          500: '#56667A',
          600: '#3D4D61',
          700: '#28384D',
          800: '#17273A',
          900: '#0E1A29'
        },
        navy: {
          600: '#254E75',
          700: '#1C3D5E',
          800: '#142E47',
          900: '#0D2033'
        },
        coral: {
          500: '#C0392B',
          600: '#A92D20'
        }
      },
      boxShadow: {
        soft: '0 2px 4px rgba(13,32,51,.04), 0 10px 28px -8px rgba(13,32,51,.08)',
        card: '0 2px 5px rgba(13,32,51,.04), 0 16px 36px -16px rgba(13,32,51,.16)',
        lift: '0 24px 60px -20px rgba(13,32,51,.32)'
      }
    }
  },
  plugins: [],
}
