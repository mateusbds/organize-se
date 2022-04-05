import { Components, Theme } from '@mui/material';

export default function Icon(theme: Theme): Components<Theme> {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: theme.palette.text.secondary,
        },
      },
    },
  };
}
