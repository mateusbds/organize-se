import { alpha, Components, Theme } from '@mui/material';

export default function Drawer(theme: Theme): Components<Theme> {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRightColor: alpha(isLight ? theme.palette.grey[900] : theme.palette.grey[100], 0.2),
        },
      },
    },
  };
}
