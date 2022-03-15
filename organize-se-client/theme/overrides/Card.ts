import { Components, Theme } from '@mui/material';

export default function Card(theme: Theme): Components<Theme> {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[4],
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
  };
}
