import { SimplePaletteColorOptions } from '@mui/material';
import { ColorPartial, TypeAction, TypeBackground, TypeText, PaletteOptions } from '@mui/material/styles/createPalette';

export const primary: SimplePaletteColorOptions = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
};

export const secondary: SimplePaletteColorOptions = {
  main: '#9c27b0',
  light: '#ba68c8',
  dark: '#7b1fa2',
};

export const error: SimplePaletteColorOptions = {
  main: '#d32f2f',
  light: '#ef5350',
  dark: '#c62828',
};

export const warning: SimplePaletteColorOptions = {
  main: '#ed6c02',
  light: '#ff9800',
  dark: '#e65100',
};

export const info: SimplePaletteColorOptions = {
  main: '#0288d1',
  light: '#03a9f4',
  dark: '#01579b',
};

export const success: SimplePaletteColorOptions = {
  main: '#2e7d32',
  light: '#4caf50',
  dark: '#1b5e20',
};

export const grey: ColorPartial = {
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#eeeeee',
  '300': '#e0e0e0',
  '400': '#bdbdbd',
  '500': '#9e9e9e',
  '600': '#757575',
  '700': '#616161',
  '800': '#424242',
  '900': '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};

export const text: Partial<TypeText> = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.6)',
  disabled: 'rgba(0, 0, 0, 0.38)',
};

export const divider = 'rgba(0, 0, 0, 0.12)';

export const background: Partial<TypeBackground> = {
  paper: '#fff',
  default: '#fff',
};

export const action: Partial<TypeAction> = {
  active: 'rgba(0, 0, 0, 0.54)',
  hover: 'rgba(0, 0, 0, 0.04)',
  hoverOpacity: 0.04,
  selected: 'rgba(0, 0, 0, 0.08)',
  selectedOpacity: 0.08,
  disabled: 'rgba(0, 0, 0, 0.26)',
  disabledBackground: 'rgba(0, 0, 0, 0.12)',
  disabledOpacity: 0.38,
  focus: 'rgba(0, 0, 0, 0.12)',
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
};

const common = {
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  grey,
  text,
  divider,
  background,
  action,
};

export const palette: { light: PaletteOptions; dark: PaletteOptions } = {
  light: {
    ...common,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  dark: {
    ...common,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
};
