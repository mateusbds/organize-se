import type {} from '@mui/lab/themeAugmentation';
export {};

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
}

// declare module '@mui/material/styles/createTheme'{
//   interface Theme {

//   }
// }
