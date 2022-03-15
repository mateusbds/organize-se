import { Components, Theme } from '@mui/material';

export default function Button(theme: Theme): Components<Theme> {
  return {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
