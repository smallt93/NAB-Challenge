export const defaultTheme = {
  colors: {
    white: '#ffffff',
    pureBlack: '#000000',
    black: '#333',
    border: '#b4b9c3',
    borderLighter: '#e6e7e9',
    borderInput: '#ddd',
    default: '#333',
    success: '#41b883',
    info: '#42baf9',
    warning: '#faad15',
    danger: '#f5222e',
    light: '#f2f4f8',
    grey: '#a2a2a5',
    greyHover: '#e2e2e2',
    background: '#b9c8d8',
  },

  rem: (px, base = 10) => {
    const remCalc = Math.floor((px / base) * 100) / 100;
    return `${remCalc}rem`;
  },
};
