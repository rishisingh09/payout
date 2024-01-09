/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    margin: {
      '4px': '4px',
      '6px': '6px',
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      '16px': '16px',
      '20px': '20px',
      '24px': '24px',
      '32px': '32px',
    },
    padding: {
      '6px': '6px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '12px': '12px',
      '14px': '14px',
      '32px': '32px',
      '20px': '20px',
      '24px': '24px',
      '15px': '15px',
      '16px': '16px',
    },
    fontSize: {
      10: ['10px', '13px'],
      12: ['12px', '18px'],
      13: ['13px'],
      14: ['14px', '20px'],
      15: ['15px', '22px'],
      16: ['16px', '24px'],
      18: ['18px', '26px'],
      20: ['20px', '28px'],
      22: ['22px', '30px'],
      21: ['21px', '30px'],
      24: ['24px', '32px'],
      26: ['26px', '32px'],
      28: ['28px', '32px'],
      30: ['30px', '34px'],
      32: ['32px', '36px'],
      34: ['34px', '37px'],
      35: ['35px', '37px'],
      36: ['36px', '38px'],
      38: ['38px', '46px'],
      46: ['46px', '58px'],
      48: ['48px', '60px'],
    },
    colors: {
      white: "#FFFFFF",
      offwhite: "#FAFAFA",
      black: '#1E2640',
      black10: "#FFFFFF1A",
      black11: '#353C53',
      black12: "#1A181E",
      black30: "#4D4D4D",
      black85: "#D9D9D9",
      black90: "#E6E6E6",
      black95: "#F2F2F2",
      blue: "#146EB4",
    },
  },
  plugins: [],
}